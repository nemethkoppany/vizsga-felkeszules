import { useState,useEffect,useRef } from "react"
import { useNavigate } from "react-router"


export default function UjIngatlan(){

    const navigate = useNavigate();
    const [kategoria, setKategoria] = useState([]);
    const [err, setErr] = useState("");

    const kategoriaRef = useRef("");
    const datumRef = useRef("");
    const leirasRef = useRef("");
    const tehermentesRef = useRef(false);
    const fenykepRef = useRef("");

    useEffect(()=>{
        fetch("http://localhost:5000/api/kategoriak")
        .then((res)=>{
            if(!res.ok) throw new Error(err.message);
            return res.json();
        })
        .then((data)=>{
            setKategoria(data);
        })
        .catch((err)=>setErr(err.message))

        

    },[])

    function onSave(event){
            event.preventDefault();

            const ujHirdetes = {
                id:0,
                kategoriaId: Number(kategoriaRef.current.value),
                hirdetesDatuma: new Date().toISOString(),
                leiras: leirasRef.current.value,
                tehermentes: tehermentesRef.current.checked,
                kepUrl: fenykepRef.current.value
            }

            fetch("http://localhost:5000/api/ujingatlan",{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(ujHirdetes)
            })
            .then((res)=>{
                if(!res.ok) throw new Error(res.message);
                return res.json();
            })
            .then(()=>navigate("/"))
            .catch((err)=>setErr(err.message));
        }
    return(
        <div>
            <h1>Új hirdetés elküldése</h1>
            <div>
                <form onSubmit={onSave}>
                    <label htmlFor="kategoria">Ingatlan kategóriája </label>
                    <select name="" ref={kategoriaRef} id="">
                        <option value="">Kérem válasszon</option>
                        {kategoria.map((k)=>(
                            <option value={k.id} key={k.id}>{k.megnevezes}</option>
                        ))}
                    </select>

                    <br />

                    <label htmlFor="datum">Hirdetés dátuma</label>
                    <input type="date" ref={datumRef} value={new Date().toISOString().split("T")[0]} readOnly/>
                    <br />
                    <label htmlFor="leiras">Ingatlan leírása</label>
                    <textarea name="" ref={leirasRef} id=""></textarea>
                    <br />
                    <input type="checkbox" ref={tehermentesRef}/>
                    <label htmlFor="">Tehermentes ingatlan</label>
                    <br />
                    <label htmlFor="">Fénykép az ingatlanról</label>
                    <input type="text" ref={fenykepRef}/>

                    <button className="btn btn-primary">Küldés</button>
                </form>
            </div>
        </div>
    )
}