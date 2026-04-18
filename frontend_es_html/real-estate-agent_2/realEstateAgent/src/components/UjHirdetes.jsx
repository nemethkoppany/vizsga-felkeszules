import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function UjHirdetes() {
  const navigate = useNavigate();
  const [kategoriak, setKategoriak] = useState([]);
  const [err, setErr] = useState(null);

  const kategoriaRef = useRef("");
  const leirasRef = useRef("");
  const tehermentesRef = useRef(false);
  const kepUrlRef = useRef("");
  const hirdetesRef = useRef(Date.now())

  useEffect(() => {
    fetch("http://localhost:5000/api/kategoriak")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setKategoriak(data);
      })
      .catch((err) => setErr(err.message));
  }, []);

  function onSave(event){

    event.preventDefault();

    const ujHirdetes = {
        id: 0,
        kategoriaId: Number(kategoriaRef.current.value),
        hirdetesDatuma: new Date().toISOString().substring(0,10),
        leiras: leirasRef.current.value,
        tehermentes: tehermentesRef.current.checked,
        kepUrl: kepUrlRef.current.value
    };

    fetch("http://localhost:5000/api/ujingatlan",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(ujHirdetes)
    })
    .then(res => res.json())
    .then(()=>navigate("/offers"))
    .catch((err)=>setErr(err.message))
  }

  return (
    <div>
      <h1>Új hirdetés elküldése</h1>

      <form onSubmit={onSave}>
        <div>
          <label htmlFor="kategoria">Ingatlan kategóriája:</label>
          <select name="" ref={kategoriaRef} id="">
            <option value="">Kérem válasszon</option>
            {kategoriak.map((k) => (
              <option key={k.id} value={k.id}>
                {k.megnevezes}
              </option>
            ))}
          </select>
        </div>
        <div>
            <label htmlFor="hirdetesDatuma">Hirdetés Dátuma: </label>
            <input type="date" readOnly ref={hirdetesRef} value={new Date().toISOString().split("T")[0]}/>
        </div>
        <div>
            <label htmlFor="liras">Ingatlan leírása: </label>
            <textarea name="" ref={leirasRef} id=""></textarea>
        </div>
        <div>
            <label htmlFor="tehermentes">Tehermentes ingatlan</label>
            <input type="checkbox" ref={tehermentesRef}/>
        </div>
        <div>
            <label htmlFor="">Fénykép az ingatlanról: </label>
            <input type="url" ref={kepUrlRef} name="" id="" />
        </div>

        <div>
            <button className="btn btn-success">Küldés</button>
        </div>
      </form>
    </div>
  );
}
