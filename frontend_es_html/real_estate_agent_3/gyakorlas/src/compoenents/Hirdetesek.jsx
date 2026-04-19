import { useState, useEffect } from "react"

export default function Hirdetesek(){
const [hirdetes, setHirdetes] = useState([]);
const [err, setErr] = useState(null);

useEffect(()=>{
    fetch("http://localhost:5000/api/ingatlan")
    .then((res)=>{
        return res.json();
    })
    
    .then((data)=>{
    console.log(data);
    setHirdetes(data)
})
    .catch(err => setErr(err?.message||"Imseretlen hiba"))
},[])

    return(
        <div>
            <table>
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
                    {hirdetes.map((h)=>(
                        <tr key={h.id}>
                            <td>{h.kategoriaNev}</td>
                            <td>{h.leiras}</td>
                            <td>{h.hirdetesDatuma}</td>
                            <td>{h.tehermentes ? "Igen": "Nem"}</td>
                            <td><img src={h.kepUrl} alt="" className="img-flow " width={200} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}