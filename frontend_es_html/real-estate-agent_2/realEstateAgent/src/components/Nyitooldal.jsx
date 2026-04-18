import { Link } from "react-router";
import kep from "../assets/real-estate-agent.png";
export default function Nyitooldal() {
  return (
    <div>
      <h1>Á.L.B. Ingatlanügynökség</h1>
      <img src={kep} alt="" />
      <div>
      <Link to={"/offers"} className="btn btn-primary btn-lg">Nézze meg kínálatunkat!</Link>
      <Link to={"/newad"} className="btn btn-primary btn-lg">Hirdessen nálunk!</Link>
      </div>

    </div>
  );
}
