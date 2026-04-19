import { useState,useEffect, useRef } from "react"
import { useNavigate } from "react-router"



export default function UjHirdetes(){
    const navigate = useNavigate();


    const [kategoria, setKategoria] = useState([]);
    const [err, setErr] = useState(null);

    const kategoriaref = useRef("");
    const datumRef = useRef("");
    const leirasRef = useRef("");
    const tehermentesRef = useRef(false);
    const fenykepRef = useRef("");

    useEffect(()=>{
        fetch("http://localhost:5000/api/kategoriak")
        .then((res)=>{
           return res.json();
        })
        .then((data)=>{
            setKategoria(data)
        })
        .catch(err => setErr(err.message))

    },[])
    
    function onSave(event){
        event.preventDefault();

        const ujHirdetes = {
            id: 0,
            kategoriaId: Number(kategoriaref.current.value),
            hirdetesDatuma: new Date().toISOString(),
            leiras: leirasRef.current.value,
            tehermentes: tehermentesRef.current.checked,
            kepUrl: fenykepRef.current.value
        }

        fetch("http://localhost:5000/api/ujingatlan",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(ujHirdetes)
        })
        .then((res)=>{
            return res.json()
        })
        .then(()=>(navigate("/"))
            
        )
        .catch((err)=>setErr(err.message));
    }

    console.log(kategoria);
    return(
        <div>
            <h1>Új hirdetések</h1>
            <form onSubmit={onSave}>
            <label htmlFor="">Ingatlan kategóriája</label><br></br>
            <select ref={kategoriaref} name="" id="">
                <option value="">Kérem válasszon</option>
                {kategoria.map((k)=>{
                   return <option key={k.id} value={k.id}>{k.megnevezes}</option>
                })}
            </select><br></br>


            <label htmlFor="">Hirdetés dátuma</label><br></br>
            <input type="date" ref={datumRef} value={new Date().toISOString().split("T")[0]} readOnly/><br></br>
            
            <label htmlFor="">Ingatlan leírása</label><br></br>
            <textarea ref={leirasRef} name="" id=""></textarea><br></br>

            <input ref={tehermentesRef} type="checkbox" />
            <label  htmlFor="">Tehermentes ingatlan</label> <br></br>

            <label htmlFor="">Fénykép az ingatlanról</label><br></br>
            <input ref={fenykepRef} type="text" />

            <button className="btn btn-success">Küldés</button>
            </form>
        </div>
    )
}