import { Link } from "react-router-dom"

export default function NavPage(props){
    return(
        <nav className="nav-page">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> / </li>
                <Link></Link>
                <li>{props.page}</li>
            </ul>
        </nav>
    )
}