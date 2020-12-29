import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/all.css';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card';

import one from '../assets/images/pic1.jpg';
import two from '../assets/images/pic2.jpg';
import three from '../assets/images/pic3.jpg';
import check from '../assets/images/check.png';

function Home() {
    return (    
        <div>  
{/*  CAROUSEL  */}
            <Carousel className="carousel">  
                <Carousel.Item>    
                    <img src={one} alt="First slide"/>  
                    <Carousel.Caption>
                        <p>Sapulču telpa</p>
                    </Carousel.Caption>  
                </Carousel.Item>  
                <Carousel.Item>
                    <img src={two} alt="Third slide"/> 
                    <Carousel.Caption>
                        <p>Fiksētās darba vietas</p>
                    </Carousel.Caption>     
                </Carousel.Item>  
                <Carousel.Item>    
                    <img src={three} alt="Third slide"/>   
                    <Carousel.Caption>
                        <p>Nefiksētās darba vietas</p>
                    </Carousel.Caption>   
                </Carousel.Item>
            </Carousel>               
{/* CARDS */}
            <CardDeck>
                <Card>
                    <div><Card.Img variant="top" src={check} className="homeCardImg" /></div>
                    <div>
                        <Card.Body>
                            <NavLink className="nav-link active" exec to="/abonents"><Card.Title>Izmaksas</Card.Title></NavLink>
                            <Card.Text className="homeCardText">Kopstrādes biroja telpu īre ir daudz lētāka, 
                                kā privāta biroja īre un daudz produktīvāka, kā darbu veikšana no mājām.</Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div><Card.Img variant="top" src={check} className="homeCardImg" /></div>
                    <div>
                        <Card.Body>
                            <NavLink className="nav-link active" exec to="/abonents"><Card.Title>Lokācija</Card.Title></NavLink>
                            <Card.Text className="homeCardText">Coworking Liepaja piedāvā lielisku atrašanās vietu 
                                pilsētas centrālajā daļā ar bezmaksas autostāvietu.</Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                <Card >
                    <div><Card.Img variant="top" src={check} className="homeCardImg" /></div>
                    <div>
                        <Card.Body>
                            <NavLink className="nav-link active" exec to="/abonents"><Card.Title>Tīklošanās</Card.Title></NavLink>
                            <Card.Text className="homeCardText">Kopstrādes birojs ir lieliska iespēja atrast jaunus klientus
                                 un sadarbības partnerus.</Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </CardDeck>
        </div>    
        );
    }
export default Home;
