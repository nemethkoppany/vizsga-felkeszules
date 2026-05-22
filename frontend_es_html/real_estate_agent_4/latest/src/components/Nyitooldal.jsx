import { Link } from "react-router";

export default function Nyitooldal() {
  return (
    <div>
      <h1>Á.L.B ingatlanügynökség</h1>

      <div className="row">
        <div className=" col-12 col-md-6">
            <Link to={"/offers"} className="btn btn-lg btn-primary"> Nézze meg kínálatunkat!</Link>
        </div>
        <div className="col-12 col-md-6">
            <Link to={"/newad"} className="btn btn-lg btn-primary"> Hirdessen nálunk!</Link>
        </div>
      </div>
    </div>
  );
}
