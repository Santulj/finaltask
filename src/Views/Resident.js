import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-fancybox/lib/fancybox.css'
import 'react-image-lightbox/style.css';
import '../assets/css/all.css';

import pic from '../assets/images/rezidents.jpg';
import wifi from '../assets/images/wifi.jpg';
import printer from '../assets/images/printeris.jpg';
import kofee from '../assets/images/kafija.jpg';
import meeting from '../assets/images/sapulce.jpg';
import access from '../assets/images/247.jpg';
import adress from '../assets/images/juridiska.jpg';

const images = [ pic, wifi, printer, kofee, meeting, access, adress ]

function Resident() {

    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const imageCards = images.map((image) => (
        <img className="image-card" onClick={() => showImage(image)} src={image} />
      ));
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
      };
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= images.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex + 1];
          setImageToShow(nextImage);
        }
    };
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex - 1];
          setImageToShow(nextImage);
        }
      };


    return (
        <div>
{/* NAVIGATION */}
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
{/* INFO */}
            <div className="conteiner" >           
                <div className="row residentRow">
                    <div className="col-6 residentDivPic resFlex">
                        <div className="residentImages row">{imageCards}</div>
    {/* IMAGES  */}
                        {
                            lightboxDisplay ? 
                            <div id="lightbox" onClick={hideLightBox}>
                                <button className="btn btn-secondary" onClick={showPrev}>⭠</button>
                                <img id="lightbox-img" src={imageToShow}></img>
                                <button className="btn btn-secondary" onClick={showNext}>⭢</button>
                            </div>
                        : ""
                        }
                        <div/> 
                    </div>                 
                    <div className="col-6 residentDivText resFlex">
                        <div className="row">  
    {/* TEXT */}
                            <p>Coworking Liepaja ikdienā, kā savu biroju izmanto uzņēmumu vadītāji, programmētāni, grafiskie dizaineri, grāmatveži, digitālā mārketinga speciālisti, pasākumu organizatori, foto un video apstrādes speciālisti un daudzi citi savu nozaru profesionāļi</p>
                            <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja, kā savas biroja telpas ikdienā izmanto Start Up uzņēmumu vadītāji, programmētāji, grafiskie dizaineri, pasākumu organizatori, mārketinga speciālisti, foto un video apstrādes profesionāļi un citi.</p>
                            <p>Tie ir Coworking Liepaja biedri - mūsu mazā, bet strauji augošā komūna ar kuras zināšanām stipri, jo stipri lepojamies. Tie ir Coworking Liepaja biedri - mūsu mazā, bet strauji augošā komūna ar kuras zināšanām stipri, jo stipri lepojamies.</p>
                            <p>Coworking Liepaja ikdienā, kā savu biroju izmanto uzņēmumu vadītāji, programmētāni, grafiskie dizaineri, grāmatveži, digitālā mārketinga speciālisti, pasākumu organizatori, foto un video apstrādes speciālisti un daudzi citi savu nozaru profesionāļi</p>
                            <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms".</p>
                            <p>Coworking Liepaja ir kopstrādes birojs vienā no Liepājas aktuālākajām pulcēšanās vietām "Juliannas Pagalms". Coworking Liepaja, kā savas biroja telpas ikdienā izmanto Start Up uzņēmumu vadītāji, programmētāji, grafiskie dizaineri, pasākumu organizatori, mārketinga speciālisti, foto un video apstrādes profesionāļi un citi.</p>
                        </div>
                    </div>        
                </div>
            </div>
        </div>         
    )
}
export default Resident;