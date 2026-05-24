import { useState, useRef, useEffect } from "react";
import { useFetcher, useNavigate } from "react-router";

export default function NewAd() {
  const datum = new Date().toISOString().substring(0,10);
  const [kategoriak, setKategoriak] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const kategoriaRef = useRef("");
  const leirasRef = useRef("");
  const therementesRef = useRef(false);
  const fenykepRef = useRef("");

  useEffect(() => {
    fetch("http://localhost:5000/api/kategoriak")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setKategoriak(data);
      })
      .catch((err) => setErr(err));
  }, []);

  function onSave(e) {
    e.preventDefault();
    const ujIngatlan = {
      id: 0,
      kategoriaId: Number(kategoriaRef.current.value),
      leiras: leirasRef.current.value,
      hirdetesDatuma: new Date().toISOString(),
      tehermentes: therementesRef.current.checked,
      kepUrl: fenykepRef.current.value,
    };

    console.log(ujIngatlan);
    fetch("http://localhost:5000/api/ujingatlan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ujIngatlan),
    })
      .then((res) => {
       return res.json();
      })
      .then(() => {
        navigate("/offers");
      })
      .catch((err) => setErr(err));
  }

  return (
    <div>
      <h1>Új hirdetés elküldése</h1>
      <form onSubmit={onSave}>
        <label htmlFor="">Ingatlan kategóriája</label> <br />
        <select ref={kategoriaRef} name="" id="">
          <option  value="">
            Kérem válasszon
          </option>
          {kategoriak.map((k) => (
            <option key={k.id} value={k.id}>
              {k.megnevezes}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="">Hirdetés dátuma</label> <br />
        <input
          type="date"
          defaultValue={datum}
          readOnly
        />
        <br />
        <label htmlFor="">Ingatlan leírása</label>
        <br />
        <textarea name="" ref={leirasRef} id=""></textarea>
        <br />
        <label htmlFor="">Tehermentes</label>
        <input type="checkbox" ref={therementesRef} />
        <br />
        <label htmlFor="">Fénykép az ingatlanról</label>
        <br />
        <input type="text" ref={fenykepRef} />
        <button>Mentés</button>
      </form>
    </div>
  );
}
