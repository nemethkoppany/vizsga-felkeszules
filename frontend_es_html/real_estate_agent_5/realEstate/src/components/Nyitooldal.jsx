import { Link } from "react-router"

export default function Nyitooldal(){
    return(
        <div>

        <h1>Nyito</h1>

        <div className="row">
        <div className="col-12 col-md-6">
            <Link  className="btn btn-primary"to={"/offers"}>Ajánlatok</Link>
        </div>
        <div className="col-12 col-md-6">
            <Link className="btn btn-primary" to={"/newad"}>Új ajánlatok</Link>
        </div>
        </div>
        </div>
    )
}