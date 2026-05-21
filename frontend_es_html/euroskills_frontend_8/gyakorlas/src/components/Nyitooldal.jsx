import { Link } from "react-router";
import kep from "../../../forrasok/nyitokep.webp";
import { useState } from "react";


export default function Nyitooldal() {
  const [token, setToken ] = useState(()=>localStorage.getItem("token"))
  
    return (
    <div>
      <h1>EuroSkills Budapest 2018</h1>

      <div>
        <p>
          Ünnepélyes záró ceremónia keretében hirdették ki a EuroSkills Budapest
          2018 győzteseit a Papp László Budapest Sportarénában 2018. szeptember
          29-én. Magyar versenyző 27 szakmában indult, ebből 17
          versenyszakmákban értek el helyezést. Hazánk ismét bebizonyította,
          hogy a magyar fiatalok nem maradnak el szaktudásban és tehetségben
          európai társaiktól.
        </p>
        <p>
          A magyar szakemberek ismét bizonyították, hogy tudásuk és szakértelmük
          kiemelkedő az európai mezőnyben is: 3 arany, 3 ezüst, 3 bronz és 8
          kiválósági érmet nyertek, összesen 17 helyezést. A EuroSkills Budapest
          2018 Nemzet Legjobbja kitüntetést Nagy Ádám János tudhatja magáénak.
        </p>
        <h2>Eredmények</h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={kep} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <h3>Aranyérem és a nemzet legjobbja:</h3>
          <ul>
            <li>Nagy Ádám János, épületasztalos</li>
          </ul>

          <h3>Aranyérem:</h3>
          <ul>
            <li>Simon Krisztián, bútorasztalos</li>
            <li>Sipos Kristóf Balázs, mechatronika (csapat)</li>
            <li>Takács Zoltán, mechatronika (csapat)</li>
          </ul>

          <h3>Ezüstérem:</h3>
          <ul>
            <li>Hasza Attila, autószerelő</li>
            <li>Varholik Dávid, ápolás és gondozás</li>
            <li>Cseke Szabolcs, festő, díszítőfestő</li>
            <li>Balogh Ákos, webfejlesztő</li>
          </ul>

          <h3>Bronzérem:</h3>
          <ul>
            <li>Zaja Dániel, hegesztő</li>
            <li>Balogh Krisztián, kőfaragó</li>
            <li>Takács Dániel, virágkötő</li>
          </ul>
        </div>

        
      </div>
      <h2>
        <strong>
          Szívből gratulálunk minden résztvevőnek az elhivatott munkájához és a
          kiemelkedő eredményekhez!
        </strong>
      </h2>

      {token ? (<button className="btn btn-danger" onClick={()=>{localStorage.removeItem("token");setToken(null)}}>Kijelentkezés</button>):(<Link to={"/login"} className="btn btn-success">Bejelentkezés</Link>)}

      <Link to={"/versenyzok"} className="btn btn-primary">További eredmények</Link>
      
    </div>
  );
}
