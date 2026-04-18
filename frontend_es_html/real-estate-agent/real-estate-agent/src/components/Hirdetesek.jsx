import { useState, useEffect } from "react"

export default function Hirdetesek(){
    const [hirdetes, setHirdetes] = useState([]);
    const [_hiba, setHiba] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:5000/api/ingatlan")
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            return res.json();
        })
        .then((data)=>{
            const rendezett = data.sort((a,b)=>(
                a.kategoriaNev.localeCompare(b.kategoriaNev)
            ))
            setHirdetes(rendezett);
        })
        .catch((err)=>setHiba(err.message))
    },[])
    
  

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Kategória</th>
                        <th>Leírás</th>
                        <th>Hirdetés Dátuma</th>
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
                            <td>{h.tehermentes?"Igen":"Nem"}</td>
                            <td><img src={h.kepUrl} height="200" className="img-fluid"/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}