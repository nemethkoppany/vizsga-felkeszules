import { Link } from "react-router-dom";
import kep from "../../../forrás/indexkep.jpg"
import { useState } from "react";
import { Button } from "bootstrap";
export default function Nyitooldal() {
    const [token,setToken] = useState(()=>(localStorage.getItem("token")))
  return (
    <div>
      <h1>Pékség</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <p>
            A pékség olyan létesítmény, amely kemencében sült lisztalapú
            ételeket, például kenyeret, kekszeket, süteményeket, fánkot,
            péksüteményeket és pitéket állít elő és értékesít.
          </p>
          <p>
            Vedd fel velünk még ma a kapcsolatot elérhetőségeink egyikén, vagy
            ugorj be reggeli-, ebéd-, vagy vacsoraidőben finomságainkért!
          </p>

          <h2>Nyitvatartás: </h2>
          <p>Hétfő-Péntek: 07:00- 17:00</p>
          <p>Szombat: 08:00-14:00</p>
          <p>Vasárnap: 08:00-14:00</p>

         
        </div>
         <p className="col-12 col-md-6">
            <img className="img-fluid" src={kep} alt="" />
          </p>
      </div>

        {token ? (<button onClick={()=>{localStorage.removeItem("token");setToken(null)}}>Kijelentkezés</button>): (<Link to={"/login"} className="btn btn-success">Bejelentkezés</Link>)}

      <Link to={"/termekek"} className="btn btn-warning">Termékek</Link>
      
    </div>
  );
}
