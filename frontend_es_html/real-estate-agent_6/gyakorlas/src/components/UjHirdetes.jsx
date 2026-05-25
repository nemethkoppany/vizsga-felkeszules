import { useRef, useState,useEffect } from "react"
import { useNavigate } from "react-router"

export default function UjHirdetes(){
    const [kategoria, setKategoria] = useState([]);
    const navigate = useNavigate();
    const [err, setErr] = useState("");


    const kategoriaRef = useRef();
    const datumaRef = useRef("");
    const leirasRef = useRef("");
    const tehermenRef = useRef(false);
    const kepRef = useRef("");



    useEffect(()=>{
        fetch("http://localhost:5000/api/kategoriak")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setKategoria(data);
        })
        .catch((err)=> setErr(err));

    },[])
    
    function onSave(e){
        e.preventDefault();

        const ujIngatlan = {
            id:0,
            kategoriaId: Number( kategoriaRef.current.value),
            leiras: leirasRef.current.value,
            hirdetesDatuma: new Date().toISOString(),
            tehermentes: tehermenRef.current.checked,
            kepUrl: kepRef.current.value
        }

        fetch("http://localhost:5000/api/ujingatlan",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(ujIngatlan)
        })
        .then((res)=>{
            return res.json();
        })
        .then(()=>{
            navigate("/hirdetesek");
        })
        .catch((err)=>setErr(err))
    }

    return(

        <div>
            <form onSubmit={onSave}>

            <label htmlFor="">Kategoria</label>
            <select name="" ref={kategoriaRef} id="">
                <option value="">Kérem válasszon</option>
                {kategoria.map((k)=>(
                    <option value={k.id} key={k.id}>{k.megnevezes}</option>
                ))}
            </select>


                <label htmlFor="">Datum</label>
                <input type="date" readOnly value={new Date().toISOString().substring(0,10)}/>

                <label htmlFor="">leírás</label>
                <textarea name="" ref={leirasRef} id=""></textarea>

                <input type="checkbox" ref={tehermenRef}/>
                <label htmlFor="">Theremnetes</label>

                <label htmlFor="">Kep</label>
                <input type="text" ref={kepRef}/>

                <button className="btn btn-primary">Mentés</button>
            </form>
        </div>
    )
}