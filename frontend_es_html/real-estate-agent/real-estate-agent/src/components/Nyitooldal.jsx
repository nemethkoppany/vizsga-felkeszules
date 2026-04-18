import kep from "../assets/real-estate-agent.png"
import { Link } from "react-router"

export default function Nyitooldal(){
    return(
        <div>
            <h1>Á.L.B. Ingatlan ügynökség</h1>
            <img src={kep} alt="Ingatlan-stock-photo" className="" />
            <Link className="btn btn-primary btn-lg" to={"/hirdetesek"}>Nézze meg kínálatunkat!</Link>
            <Link className="btn btn-primary btn-lg" to={"/uj-hirdetes"}>Hirdessen nálunk!</Link>
        </div>
    )
}