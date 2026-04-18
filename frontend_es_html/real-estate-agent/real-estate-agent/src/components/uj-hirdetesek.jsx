import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UjHirdetesek() {
  const navigate = useNavigate();
  const [kategoriak, setKategoriak] = useState([]);
  const [err, setErr] = useState(null);

  const kategoriaRef = useRef("");
  const leirasRef = useRef("");
  const tehermentesRef = useRef(false);
  const kepUrlRef = useRef("");

  useEffect(() => {
    fetch("http://localhost:5000/api/kategoriak")
      .then((res) => res.json())
      .then((data) => setKategoriak(data))
      .catch((err) => setErr(err.message));
  }, []);

  function onSave(event) {
    event.preventDefault();

    const ujHirdetes = {
      id: 0,
      kategoriaId: Number(kategoriaRef.current.value),
      hirdetesDatuma: new Date().toISOString().substring(0, 10),
      leiras: leirasRef.current.value,
      tehermentes: tehermentesRef.current.checked,
      kepUrl: kepUrlRef.current.value,
    };

    fetch("http://localhost:5000/api/ujingatlan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ujHirdetes),
    })
      .then((res) => res.json())
      .then(() => navigate("/hirdetesek"))
      .catch((err) => setErr(err.message));
  }

  return (
    <div className="container">
      <h2 className="my-4 text-center">Új hirdetés elküldése</h2>
      <form onSubmit={onSave}>

        <div className="mb-3">
          <label>Ingatlan kategóriája</label>
          <select ref={kategoriaRef} className="form-select" defaultValue="">
            <option value="">Kérem válasszon</option>
            {kategoriak.map((kat) => (
              <option key={kat.id} value={kat.id}>{kat.megnevezes}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Ingatlan leírása</label>
          <textarea ref={leirasRef} className="form-control" rows="3" />
        </div>

        <div className="form-check mb-3">
          <input ref={tehermentesRef} className="form-check-input" type="checkbox" id="tehermentes" />
          <label className="form-check-label" htmlFor="tehermentes">Tehermentes ingatlan</label>
        </div>

        <div className="mb-3">
          <label>Fénykép URL</label>
          <input ref={kepUrlRef} type="url" className="form-control" />
        </div>

        <div className="mb-3 text-center">
          <button className="btn btn-primary px-5">Küldés</button>
        </div>

        {err && <div className="alert alert-danger">{err}</div>}

      </form>
    </div>
  );
}