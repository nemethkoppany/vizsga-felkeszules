import { useState,useEffect } from "react"

export default function Termekek(){
    const [termek, setTermekek] = useState([]);
    const [hiba,setHiba] = useState(null);

    const token = localStorage.getItem("token")

    useEffect(()=>{
        fetch("http://localhost:3000/termekek")
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            return res.json();
        })
        .then((data)=>{
            const rendezett = data.sort((a,b)=>(
                a.megnevezes.localeCompare(b.megnevezes)
            ))
            setTermekek(rendezett);
        })
        .catch((err)=>setHiba(err));
    },[])
    
    function handleTorles(id){
        fetch(`http://localhost:3000/termekek/${id}`,{
            method:"DELETE",
            headers:{"Authorization":`Bearer ${token}`}
        })
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            setTermekek(termek.filter((v)=>(v.id !== id)))
        })
        .catch((err)=> {setHiba(err.message)})
    }


    return(
        <div>
            <h1>Pékségünk termékei</h1>
            <table>
                <thead> 
                    <tr>
                        <th>Fénykép</th>
                        <th>Megnevezés</th>
                        <th>Fajta</th>
                        <th>Kiszerelés</th>
                        <th>Ízvilág</th>
                        <th>Miben mentes</th>
                        <th>Allergének</th>
                        {token && <th>Törlés</th>}

                    </tr>
                </thead>
                <tbody>
                    {termek.map((t)=>(
                        <tr key={t.id}>
                            <td>{t.kepUrl}</td>
                            <td>{t.megnevezes}</td>
                            <td>{t.fajta}</td>
                            <td>{t.kiszerelés}</td>
                            <td>{t.iz}</td>
                            <td>{t.mentes}</td>
                            <td>{t.allergenek}</td>
                            {token && <td> <button onClick={()=>( handleTorles(t.id))}>Törlés</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}