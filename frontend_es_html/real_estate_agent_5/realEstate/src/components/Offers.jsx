import { useState, useEffect } from "react"

export default function Offers(){
    
    const [offers, setOffers] = useState([]);
    const [err, setErr] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/ingatlan")
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            return res.json();
        })
        .then((data)=>{
            setOffers(data);
            
        })
        .catch((err)=>setErr(err));

    },[])
    
    
    return(
        <div>
            <h1>Ajánlataink</h1>
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
                        {
                            offers.map((p)=>(
                                <tr key={p.id}>
                                    <td>{p.kategoriaNev}</td>
                                    <td>{p.leiras}</td>
                                    <td>{p.hirdetesDatuma}</td>
                                    <td>{p.tehermentes?"Igen":"Nem"}</td>
                                    <td><img src={p.kepUrl} alt="" className="img-fluid"/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}