import { useState, useEffect } from "react";

export default function Hirdetesek() {
  const [hirdetes, setHirdetes] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ingatlan")
      .then((res) => {
        if (!res.ok) throw new Error(err.message);
        return res.json();
      })
      .then((data) => {
        setHirdetes(data);
      })
      .catch((err) => setErr(err.message));
  }, []);

  return (
    <div>
      <h1>Ajánlataink</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Kategória</th>
              <th>Leírás</th>
              <th>Hirdetés dátuma</th>
              <th>Tehermentes</th>
              <th>Fénykép</th>
            </tr>
          </thead>
          <tbody>
            {hirdetes.map((h) => (
              <tr key={h.id}>
                <th>{h.kategoriaNev}</th>
                <th>{h.leiras}</th>
                <th>{h.hirdetesDatuma}</th>
                <th>{h.tehermentes ? "igen" : "nem"}</th>
                <th>
                  <img src={h.kepUrl} className="img-fluid" alt="" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
