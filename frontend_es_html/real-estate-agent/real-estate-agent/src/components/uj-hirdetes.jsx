// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function UjHirdetes() {
//   const navigate = useNavigate();

//   const [kategoriak, setKategoriak] = useState([]);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/kategoriak")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`,
//           );
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Kategoriák adatai:", data);
//         setKategoriak(data);
//       })
//       .catch((err) => {
//         console.error("Hiba a fetch-ben:", err);
//         setErr(`Hiba a kategóriák lekérése közben ${err.message}`);
//       });
//   }, []);

//   const datum = new Date().toISOString().substring(0, 10);

//   const kategoriaRef = useRef("");
//   const leirasRef = useRef("");
//   const tehermentesRef = useRef(false);
//   const kepUrlRef = useRef("");

//   const [isValid, setIsValid] = useState({
//     kategoria: false,
//     leiras: false,
//     kepUrl: false,
//   });

//   const [isEdit, setIsEdit] = useState({
//     kategoria: false,
//     leiras: false,
//     kepUrl: false,
//   });

//   function validateField(value, inputName) {
//     const valid = value.trim() !== "";

//     setIsValid((prev) => ({
//       ...prev,
//       [inputName]: valid,
//     }));

//     setIsEdit((prev) => ({
//       ...prev,
//       [inputName]: true,
//     }));
//   }

//   function onSave(event) {
//     event.preventDefault();
//     const ujHirdetes = {
//       id: 0,
//       kategoriaId: Number(kategoriaRef.current.value),
//       hirdetesDatuma: datum,
//       leiras: leirasRef.current.value,
//       tehermentes: tehermentesRef.current.checked,
//       kepUrl: kepUrlRef.current.value,
//     };

//     console.log("Küldött adatok:", ujHirdetes);

//     fetch("http://localhost:5000/api/ujingatlan", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(ujHirdetes),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(
//             `Hibakód: ${res.status}, Hibaüzenet: ${res.statusText}`,
//           );
//         }
//         return res.json();
//       })
//       .then(() => {
//         navigate("/hirdetesek");
//       })
//       .catch((err) => {
//         setErr(`Hiba az új hirdetés felvétele közben ${err.message}`);
//       });
//   }

//   return (
//     <div className="container">
//       <h2 className="my-4 text-center">Új hirdetés elküldése</h2>
//       <div className="row">
//         <div className="col-lg-10 col-md-10 col-12 mx-auto">
//           <form onSubmit={onSave}>
//             <div className="mb-3">
//               <div className="row">
//                 <div className="col-6">
//                   <label htmlFor="kategoria">Ingatlan kategóriája</label>
//                 </div>
//                 <div className="col-6 text-end">
//                   {isEdit.kategoria && !isValid.kategoria && (
//                     <span className="text-danger">
//                       Válasszon egy kategóriát
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <select
//                 ref={kategoriaRef}
//                 id="kategoria"
//                 name="kategoria"
//                 className="form-select"
//                 defaultValue=""
//                 onChange={() =>
//                   validateField(
//                     kategoriaRef.current.value,
//                     kategoriaRef.current.name,
//                   )
//                 }
//                 onBlur={() =>
//                   validateField(
//                     kategoriaRef.current.value,
//                     kategoriaRef.current.name,
//                   )
//                 }
//               >
//                 <option value="">Kérem válasszon</option>
//                 {kategoriak.map((kat) => (
//                   <option key={kat.id} value={kat.id}>
//                     {kat.megnevezes}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="datum">Hirdetés dátuma</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="datum"
//                 name="datum"
//                 value={datum}
//                 readOnly
//               />
//             </div>

//             <div className="mb-3">
//               <div className="row">
//                 <div className="col-6">
//                   <label htmlFor="leiras">Ingatlan leírása</label>
//                 </div>
//                 <div className="col-6 text-end">
//                   {isEdit.leiras && !isValid.leiras && (
//                     <span className="text-danger">Adjon meg leírást</span>
//                   )}
//                 </div>
//               </div>
//               <textarea
//                 ref={leirasRef}
//                 className="form-control"
//                 id="leiras"
//                 name="leiras"
//                 rows="3"
//                 onChange={() =>
//                   validateField(leirasRef.current.value, leirasRef.current.name)
//                 }
//                 onBlur={() =>
//                   validateField(leirasRef.current.value, leirasRef.current.name)
//                 }
//               />
//             </div>

//             <div className="form-check mb-3">
//               <input
//                 ref={tehermentesRef}
//                 className="form-check-input"
//                 type="checkbox"
//                 id="tehermentes"
//                 name="tehermentes"
//                 defaultChecked={false}
//               />
//               <label className="form-check-label" htmlFor="tehermentes">
//                 Tehermentes ingatlan
//               </label>
//             </div>

//             <div className="mb-3">
//               <div className="row">
//                 <div className="col-6">
//                   <label htmlFor="kepUrl">Fénykép az ingatlanról</label>
//                 </div>
//                 <div className="col-6 text-end">
//                   {isEdit.kepUrl && !isValid.kepUrl && (
//                     <span className="text-danger">Adjon meg kép URL-t</span>
//                   )}
//                 </div>
//               </div>
//               <input
//                 ref={kepUrlRef}
//                 type="url"
//                 className="form-control"
//                 id="kepUrl"
//                 name="kepUrl"
//                 onChange={() =>
//                   validateField(kepUrlRef.current.value, kepUrlRef.current.name)
//                 }
//                 onBlur={() =>
//                   validateField(kepUrlRef.current.value, kepUrlRef.current.name)
//                 }
//               />
//             </div>

//             <div className="mb-3 text-center">
//               <button className="btn btn-primary px-5">Küldés</button>
//             </div>

//             {err != null && (
//               <div
//                 className="alert alert-danger alert-dismissible"
//                 role="alert"
//               >
//                 <strong>{err}</strong>
//                 <button
//                   onClick={() => {
//                     setErr(null);
//                   }}
//                   type="button"
//                   className="btn-close"
//                 ></button>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
