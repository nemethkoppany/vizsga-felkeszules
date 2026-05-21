import { useState,useEffect } from "react"


export default function Versenyzok(){


    const token = localStorage.getItem("token")
    const [versenyzo,setVersenyzok] = useState([]);
    const [hiba,setHiba] = useState("")

    useEffect(()=>{
        fetch("http://localhost:3000/versenyzok")
        .then((res)=>{
            if(!res.ok) throw new Error(res.message)
            return res.json();
        })
        .then((data)=>{
            const rendezett = data.sort((a,b)=>{
                const rendezNev = a.szakmaNev.localeCompare(b.szakmaNev)
                if(rendezNev !== 0) return rendezNev
                 return Number(b.pont) - Number(a.pont)
            })
            setVersenyzok(rendezett);
        })
        .catch((err)=>setHiba(err));
    },[])


    function handleDelete(id){
        fetch(`http://localhost:3000/versenyzok/${id}`,{
            method:"DELETE",
            headers:{Authorization: `Bearer ${token}`}
        })
        .then((res)=>{
            if(!res.ok) throw new Error(res.message)
                setVersenyzok(versenyzo.filter((v)=>v.id !== id))
        })
        .catch((err)=>setHiba(err.message))
    }
    return(
        <div>
            <h1>A döntö versenyzői és eredményeik</h1>
            <table>
                <thead>
                    <tr>
                        <th>Szakma</th>
                        <th>Név</th>
                        <th>Ország</th>
                        <th>Pontszám</th>
                        {token && <th>Törlés</th>}
                    </tr>
                </thead>
                <tbody>
                    {versenyzo.map((v)=>(
                        <tr key={v.id}>
                            <td>{v.szakmaNev}</td>
                            <td>{v.nev}</td>
                            <td>{v.orszagNev}</td>
                            <td>{v.pont}</td>
                            {token && <td><button className="btn btn-danger" onClick={()=>(handleDelete(v.id))}>Törlés</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}