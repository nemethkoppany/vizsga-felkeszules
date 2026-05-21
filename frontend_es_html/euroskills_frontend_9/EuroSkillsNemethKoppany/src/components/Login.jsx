import { useState } from "react"
import { useNavigate } from "react-router"


export default function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setError] = useState(null);
    const navigate = useNavigate();

    function handleLogin(){
        fetch("http://localhost:3000/login",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email:email, password:password})
        })
        .then((res)=>{
            if(!res.ok) throw new Error(res.message);
            return res.json();
        })
        .then((data)=>{
            localStorage.setItem("token",data.token);
            navigate("/");
        })
        .catch((err)=> setError(err.message))
    }


return(
    <div>
        <label htmlFor="email">Email: </label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <label htmlFor="password">Jelszó: </label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin} className="btn btn-success">Bejelentkezés</button>
    </div>
)

}