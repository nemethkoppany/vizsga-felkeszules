import { useState } from "react";
import { useEffect } from "react";

export default function Versenyzok() {
  const token = localStorage.getItem("token");
  const [versenyzok, setVersenyzok] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/versenyzok")
      .then((res) => {
        if (!res.ok) throw new Error(res.message);
        return res.json();
      })
      .then((data) => {
        const rendezett = data.sort((a, b) => {
          const rendezNev = a.szakmaNev.localeCompare(b.szakmaNev);
          if (rendezNev !== 0) return rendezNev;
          return Number(b.pont) - Number(a.pont);
        });
        setVersenyzok(rendezett);
      })
      .catch((err) => setErr(err));
  }, []);

  function handleDelete(id){
    fetch(`http://localhost:3000/versenyzok/${id}`,{
        method: "DELETE",
        headers:{Authorization: `Bearer ${token}`}
    })
    .then((res)=>{
        if(!res.ok) throw new Error(res.message);
        setVersenyzok(versenyzok.filter((v)=>v.id !== id));
    })
    .catch((err)=>setErr(err.message))
  }

  return (
    <div>
      <h1>A döntö versenyzői és eredményeik</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Szakma</th>
            <th>Név</th>
            <th>Ország</th>
            <th>Pontszám</th>
            {token && <th>Törlés</th>}
          </tr>
        </thead>
        <tbody>
          {versenyzok.map((v) => (
            <tr key={v.id}>
              <td>{v.szakmaNev}</td>
              <td>{v.nev}</td>
              <td>{v.orszagNev}</td>
              <td>{v.pont}</td>
              {token && <td><button onClick={()=>(handleDelete(v.id))} className="btn btn-sm btn-danger">Törlés</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
