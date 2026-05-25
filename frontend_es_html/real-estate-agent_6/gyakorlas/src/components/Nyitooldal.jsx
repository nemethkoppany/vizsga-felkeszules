import { Link } from "react-router"

export default function Nyitooldal(){
    return(
<div>
    <h1>Á.L.B. Ingatlanügynökség</h1>
    <div className="row">
        <div className="col-12 col-md-6">
            <Link to="/hirdetesek" className="btn btn-primary btn-lg"> Nézze meg kínálatunkat!</Link>
        </div>
        <div className="col-12 col-md-6">
            <Link to="/Ujhirdetes" className="btn btn-primary btn-lg">Hirdessen nálunk!</Link>
        </div>
    </div>
</div>
    )
}