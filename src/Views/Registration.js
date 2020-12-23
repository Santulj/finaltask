import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/css/all.css';
import SimpleReactValidator from 'simple-react-validator';


function Registration(){
    
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Reģistrēšanās</NavLink>
                </li>
            </ul>
            
            <div>
                <h4 className="chatH">Reģistrēšanās</h4>
                <form className="chatConteiner " id="main-form" method="post" action="#">
                    <div>
                        <label htmlFor="firstname">* Vārds:</label><br/>
                        <input id="firstname" type="text" name="firstname" />
                    </div>
                    <div>
                        <label htmlFor="surname">* Uzvārds:</label><br/>
                        <input id="surname" type="text" name="surname" />
                    </div>
                    <div>
                        <label htmlFfor="password1">* Parole:</label><br/>
                        <input id="password1" type="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="password2">* Atkārtota parole:</label><br/>
                        <input type="password" name="confirm_password" id="confirm_password" />
                    </div>
                    <div>
                        <label htmlFor="country">Valsts:</label><br/>
                        <input id="country" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="abonement">* Abonements:</label><br/>
                        <select id="abonement" name="Abonements">
                            <option value="diena">Dienas abonements</option>
                            <option value="7diena">Septiņu dienu abonements</option>
                            <option value="nefiks">Nefiksēta darba vieta</option>
                            <option value="fiks">Fiksēta darba vieta</option>
                            <option value="rezidents">Rezidents</option>
                        </select>
                    </div>
                    <div>
                        <input className="registrationInput" type="checkbox" id="check-box" value="1" name="check-box"/>
                        <label className="registrationLabel" htmlFor="checkbox">Piekrītu datu apstrādei</label> 
                    </div> 
                    <div>
                        <input type="submit" id="submit" className="btn btn-info" value="Reģistrēties"/>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Registration;