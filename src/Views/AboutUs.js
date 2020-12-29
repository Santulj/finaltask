import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/all.css';

import intars from '../assets/images/intars.jpg';
import kate from '../assets/images/kate.jpg';
import inga  from '../assets/images/inga.jpg';
import napoleons from '../assets/images/napsis.jpg';


function AboutUs() {
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    } 
    let tabContent = null;

    const one = (<div className="aboutUsConteiner">
                    <div className="row" >
                        <img className="aboutUsImg" src={intars} alt="Intars"/>
                    </div>
                    <div className="row aboutUsDivRow">
                        <h5 className="card-title">Valdes priekšsēdētājs, dibinātājs</h5>
                        <p className="card-text">Ikdienā uztur kopības sajūtu Coworking Liepaja biedru vidū, palīdz biedriem ar padomu par to uzņēmumu finanšu vadības un stratēģiskajiem jautājumiem. Rūpējas par pozitīvu atmosfēru biroja telpās. Nodarbojas ar jaunu Coworking Liepaja biedru piesaisti.</p>
                        <p className="card-text"><small class="text-muted">intars@coworkingliepaja.com</small></p>
                    </div>    
                </div>);
    const two = (<div className="aboutUsConteiner">
                    <div className="row" >
                        <img className="aboutUsImg" src={kate} alt="Jekaterina" />
                    </div>
                    <div className="row aboutUsDivRow">
                        <h5 className="card-title">Biroja vadītāja / grāmatvede</h5>
                        <p className="card-text">Rūpējas par tīrību un kārtību biroja telpās ikdienā. Rūpējas par augiem visās Coworking Liepaja biroja telpās. Nodrošina grāmatvedības ārpakalojumus vairākiem Coworking Liepaja biedriem, kā arī ir Coworking Liepaja galvenā grāmatvede.</p>
                        <p className="card-text"><small class="text-muted">jekaterina@coworkingliepaja.com</small></p>
                    </div>    
                </div>);
    const three = (<div className="aboutUsConteiner">
                    <div className="row" >
                        <img className="aboutUsImg" src={inga} alt="Inga"/>
                    </div>
                    <div className="row aboutUsDivRow">
                        <h5 className="card-title">Projektu vadītāja</h5>
                        <p className="card-text">Organizē Coworking Liepaja biedru saliedēšanās pasākumus, kā arī biedriem un citām personām pieejamas apmācības un seminārus. Ikdienā ir arī Coworking Liepaja sadarbības biedrības "YOU PLUSS" aktīvs biedrs, palīdz organizēt jauniešu pasākumus.</p>
                        <p className="card-text"><small class="text-muted">inga@coworkingliepaja.com</small></p>
                    </div>    
                </div>);
    const four = (<div className="aboutUsConteiner" >
                    <div className="row" >
                        <img className="aboutUsImg" src={napoleons} alt="Napoleons"/>
                    </div>
                    <div className="row aboutUsDivRow">
                        <h5 className="card-title">Kārlītis Napoleons III</h5>
                        <p className="card-text">Valdes priekšsēdētāja un Coworking Liepaja dibinātāja mājdzīvnieks. Reizi gadā apciemo viesmīlīgās Coworking Liepaja telpas un ievieš savu pareizo kārtību. Visu coworkeru vismīļākā radība pasaulē :) </p>
                        <p className="card-text"><small class="text-muted">info@coworkingliepaja.com</small></p>
                    </div>    
                </div>);

    if (activeTab === 1) {
        tabContent = <p>{one}</p>
    } else if (activeTab === 2) {
        tabContent = <p>{two}</p>
    } else if (activeTab === 3) {
        tabContent = <p>{three}</p>
    } else if (activeTab === 4) {
        tabContent = <p>{four}</p>
    }

    return (
        <div>
{/* NAVIGATION */}
            <ul className="nav AboutUsNav">
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Par mums</NavLink>
                </li>
            </ul>
{/* STAFF */}
            <ul className="tabs-nav AbooutUsTabsNav">
                <li className={activeTab === 1 ? 'active' : ''}><button className="btn btn-link" onClick={() => changeActiveTab(1)}>Intars</button></li>
                <li className={activeTab === 2 ? 'active' : ''}><button className="btn btn-link" onClick={() => changeActiveTab(2)}>Jekaterina</button></li>
                <li className={activeTab === 3 ? 'active' : ''}><button className="btn btn-link" onClick={() => changeActiveTab(3)}>Inga</button></li>
                <li className={activeTab === 4 ? 'active' : ''}><button className="btn btn-link" onClick={() => changeActiveTab(4)}>Napoleons</button></li>
            </ul>
            <div className="tabs-content">
                {tabContent}
            </div>
{/* INFO */}
            <div className="conteiner">
                <div className="row">
                    <div className="col-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864.950236934939!2d21.005257149333847!3d56.51133889965391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46faa61863302b61%3A0xf981634f9c6c15a0!2sCoworking%20Liepaja!5e0!3m2!1sen!2slv!4v1600992422251!5m2!1sen!2slv"   style={{border: '0', width: '600px', height: '450px', frameborder: '0', padding: '10% 0'}} aria-hidden="false" ></iframe>
                    </div>
                    <div className="col-7 aboutUsInfo">
                        <h4>Adrese:</h4>
                        <p>Friča Brīvzemnieka iela 7, Liepāja, LV-3401</p>  
                        <h4>Epasts:</h4>
                        <p>info@coworkingliepaja.com</p>
                        <h4>Tel nr:</h4>
                        <p>+371 26046749</p>
                        <a href="https://www.facebook.com/CoworkingLiepaja/"><FontAwesomeIcon className="iconF" icon={faFacebookSquare}/></a>
                        <a href="https://www.instagram.com/coworkingliepaja/?hl=en"><FontAwesomeIcon className="iconI" icon={faInstagram} /></a>
                        <a href="https://twitter.com/cowork_liepaja"><FontAwesomeIcon className="iconT" icon={faTwitterSquare}/></a>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default AboutUs;