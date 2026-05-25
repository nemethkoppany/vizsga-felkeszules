import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => setErr(err));
  }

  return (
    <div>
      <label htmlFor="">Email: </label>
      <input type="email" value={email} onChange={(e)=>setEamil(e.target.value)}/>

      <label htmlFor="">Jelszó: </label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>


      <button onClick={handleLogin} className="btn btn-primary">Mentés</button>
    </div>
  );
}
