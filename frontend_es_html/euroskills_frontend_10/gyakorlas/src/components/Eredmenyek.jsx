import { useState, useEffect } from "react"

export default function Eredmenyek(){

const [eredmenyek, setEredemenyek] = useState([]);
const [err, setErr] = useState("");
const token = localStorage.getItem("token")
useEffect(()=>{

    fetch("http://localhost:3000/versenyzok")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        const rendezett = data.sort((a,b)=>{
            const rendezNev = a.szakmaNev.localeCompare(b.szakmaNev);
            if(rendezNev !== 0) return rendezNev;
            return Number(b.pont ) - Number(a.pont)
        })
        setEredemenyek(rendezett);
    })
    .catch((err)=>setErr(err));
},[])


function handleDelete(id){
    fetch(`http://localhost:3000/versenyzok/${id}`,{
        method:"DELETE",
        headers: {Authorization: `Bearer ${token}`},

    })
    .then((res)=>res.json())
    .then(window.location.reload())
    .catch((err)=>setErr(err))
}
    return(
        <div>
            <h1>A döntő versenyzői és eredményeik</h1>

            <div>
                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th>Szakma</th>
                            <th>Név</th>
                            <th>Ország</th>
                            <th>Pontszám</th>
                            {token&&<th>Törlés</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eredmenyek.map((e)=>(
                                <tr key={e.id}>

                                    <th>{e.szakmaNev}</th>
                                    <th>{e.nev}</th>
                                    <th>{e.orszagNev}</th>
                                    <th>{e.pont}</th>
                                    {token && <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(e.id)}>Törlés</button>}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}