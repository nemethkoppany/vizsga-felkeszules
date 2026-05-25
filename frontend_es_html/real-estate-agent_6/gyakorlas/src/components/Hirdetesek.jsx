import { useState,useEffect } from "react"

export default function Hirdetesek(){
    const [hirdetes, setHirdetes] = useState([]);
    const [err, setErr] = useState("");

    useEffect(()=>{
        fetch("http://localhost:5000/api/ingatlan")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setHirdetes(data);
        })
        .catch((err)=>{setErr(err)})


    },[])
    return(
        <div>
            <h1>Ajánlataink</h1>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Kategória</th>
                            <th>Leírás</th>
                            <th>Hirdetés dátuma</th>
                            <th>Thermentes</th>
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
                                <td><img src={h.kepUrl} className="img-fluid" alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}