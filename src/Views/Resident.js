import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import { NavLink } from 'react-router-dom';
import 'react-image-lightbox/style.css';
import '../assets/css/all.css';

import pic from '../assets/images/rezidents.jpg';
import wifi from '../assets/images/wifi.jpg';
import wifiM from '../assets/images/wifiM.jpg';
import printer from '../assets/images/printeris.jpg';
import printerM from '../assets/images/printerisM.jpg';
import kofee from '../assets/images/kafija.jpg';
import kofeeM from '../assets/images/kafijaM.jpg';
import meeting from '../assets/images/sapulce.jpg';
import meetingM from '../assets/images/sapulceM.jpg';
import access from '../assets/images/247.jpg';
import accessM from '../assets/images/247M.jpg';
import adress from '../assets/images/juridiska.jpg';
import adressM from '../assets/images/juridiskaM.jpg';

function Resident() {
    return (
        <div>
            <ul className="nav" >
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/abonents">Abonementi &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Rezidenta abonements</NavLink>
                </li>
            </ul>
            <div className="conteiner" >
                <div className="row">
                    <div className="col-4" >
                        <div className="row" className="residentDivRow">
                            <ReactFancyBox thumbnail={pic} image={pic} dataFancybox="gallery"/>
                        </div>
                        <div className="row" >
                            <div className="col">
                                <div className="row" className="residentRow">
                                    <div className="col-4"><ReactFancyBox thumbnail={wifiM} image={wifi} dataFancybox="gallery" /></div>
                                    <div className="col-4"><ReactFancyBox thumbnail={printerM} image={printer} dataFancybox="gallery" /></div>
                                    <div className="col-4"><ReactFancyBox thumbnail={kofeeM} image={kofee} dataFancybox="gallery" /></div>
                                    <div className="residentLine">____________________________________________________</div>
                                    <div className="col-4" ><ReactFancyBox thumbnail={meetingM} image={meeting} dataFancybox="gallery" /></div>
                                    <div className="col-4" ><ReactFancyBox thumbnail={accessM} image={access} dataFancybox="gallery" /></div>
                                    <div className="col-4" ><ReactFancyBox thumbnail={adressM} image={adress} dataFancybox="gallery" /></div>
                                </div>
                            </div>
                        </div>     
                    </div>
                    <div className="col-8 residentDivCol">
                        <div className="row">
                            <div className="col residentCol">
                                <p>Coworking Liepaja ikdienā, kā savu biroju izmanto uzņēmumu vadītāji, programmētāni, grafiskie dizaineri, grāmatveži, digitālā mārketinga speciālisti, pasākumu organizatori, foto un video apstrādes speciālisti un daudzi citi savu nozaru profesionāļi</p>
                                <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja, kā savas biroja telpas ikdienā izmanto Start Up uzņēmumu vadītāji, programmētāji, grafiskie dizaineri, pasākumu organizatori, mārketinga speciālisti, foto un video apstrādes profesionāļi un citi.</p>
                                <p>Tie ir Coworking Liepaja biedri - mūsu mazā, bet strauji augošā komūna ar kuras zināšanām stipri, jo stipri lepojamies. Tie ir Coworking Liepaja biedri - mūsu mazā, bet strauji augošā komūna ar kuras zināšanām stipri, jo stipri lepojamies.</p>
                                <p>Coworking Liepaja ikdienā, kā savu biroju izmanto uzņēmumu vadītāji, programmētāni, grafiskie dizaineri, grāmatveži, digitālā mārketinga speciālisti, pasākumu organizatori, foto un video apstrādes speciālisti un daudzi citi savu nozaru profesionāļi</p>
                                <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja, kā savas biroja telpas ikdienā izmanto Start Up uzņēmumu vadītāji, programmētāji, grafiskie dizaineri, pasākumu organizatori, mārketinga speciālisti, foto un video apstrādes profesionāļi un citi.</p>
                                <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja, kā savas biroja telpas ikdienā izmanto Start Up uzņēmumu vadītāji, programmētāji, grafiskie dizaineri, pasākumu organizatori, mārketinga speciālisti, foto un video apstrādes profesionāļi un citi.</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>         
    )
}
export default Resident;