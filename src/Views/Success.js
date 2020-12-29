import { NavLink } from 'react-router-dom';
import '../assets/css/all.css';
import ok from '../assets/images/ok.png';


function Home() {
    return (  
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registration">Reģistrēšanās</NavLink>
                </li> 
            </ul>
            <div className="okok">
                <img className="successOk" src={ok} alt="Success"/>
                <h1 className="successH1">Reģistrēšanās pabeigta</h1>
                <h3>Mūsu komanda tuvākajā laikā ar Jums sazināsies!</h3>
                <NavLink className="nav-link active" exec to="/"><button className="btn btn-success btn-lg">Atpakaļ</button></NavLink>
            </div>
            
        </div>
    )
}
export default Home;