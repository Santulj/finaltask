import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light" style={{padding: '0 1%', marginBottom: '2%'}}>
                 <NavLink className="nav-link active" to="/">
                    <img src={logo} alt="Logo" style={{height: '40px'}}/>
                 </NavLink>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/">Sākums</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/abonents">Abonementi</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/chat">Sarakste</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/registration">Reģistrēšanās</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/about-us">Par mums</NavLink>
                </li>
            </ul>
             </nav>
        </div>
    );
}

export default Header;