import { useState, useEffect } from "react"

export default function Hirdetesek(){
    const [hirdetes, setHirdetes] = useState([]);
    const [_hiba, setHiba] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:5000/api/ingatlan")
        .then((res)=>{
            if(!res.ok) throw new Error(err.message)
            return res.json();
        })
        .then((data)=>{
            setHirdetes(data);
        })
        .catch((err)=>setHiba(err.message));

    },[])
    
    
    return(
        <div>
            <h1>Ajánlataink</h1>

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
                            <td>{h.tehermentes ? "Igen":"Nem"}</td>
                            <td><img className="img-fluid" src={h.kepUrl} alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}