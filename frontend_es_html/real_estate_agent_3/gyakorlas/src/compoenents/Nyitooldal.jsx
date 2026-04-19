import { Link } from "react-router"

export default function Nyitoolda(){
    return(
        <div>
            <h1>Nyitooldal</h1>
            <Link to={"/offers"} className="btn btn-primary btn-lg"> További hirdetések</Link>
            <Link to={"/newad"} className="btn btn-primary btn-lg">Új hirdetése</Link>
        </div>
    )
}