import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import '../assets/css/home.css';

import one from '../assets/images/pic1.jpg';
import two from '../assets/images/pic2.jpg';
import three from '../assets/images/pic3.jpg';
import check from '../assets/images/check.png';

function Home() {
    return (    
        <div>       
            <Carousel className="carousel">  
                <Carousel.Item>    
                    <img src={one} alt="First slide"/>    
                </Carousel.Item>  
                <Carousel.Item>
                    <img src={two} alt="Third slide"/>    
                </Carousel.Item>  
                <Carousel.Item>    
                    <img src={three} alt="Third slide"/>    
                </Carousel.Item>
            </Carousel>               
            
            <CardGroup className="homeCardGroup">            
                <Card className="homeCard">               
                    <Card.Img src={check} className="homeCardImg"/>                
                    <Card.Body>                    
                        ________________________________                    
                        <NavLink className="nav-link active" to="/abonents">
                        <Card.Title>Izmaksas</Card.Title></NavLink>                    
                        <Card.Text>Kopstrādes biroja telpu īre ir daudz lētāka, kā privāta biroja īre un daudz produktīvāka, kā darbu veikšana no mājām.</Card.Text>                
                    </Card.Body>            
                </Card>            
                <Card className="homeCard">                
                    <Card.Img src={check} className="homeCardImg"/>                
                    <Card.Body>                    
                        ________________________________                    
                        <NavLink className="nav-link active" to="/abonents">
                        <Card.Title>Lokācija</Card.Title></NavLink>                    
                        <Card.Text>Coworking Liepaja piedāvā lielisku atrašanās vietu pilsētas centrālajā daļā ar bezmaksas autostāvietu.</Card.Text>                
                    </Card.Body>            
                </Card>            
                <Card className="homeCard">                
                    <Card.Img src={check} className="homeCardImg"/>                
                    <Card.Body >                     
                        ________________________________                     
                        <NavLink className="nav-link active" to="/abonents">
                        <Card.Title>Tīklošanās</Card.Title></NavLink>                    
                        <Card.Text>Kopstrādes birojs ir lieliska iespēja atrast jaunus klientus un sadarbības partnerus.</Card.Text>     
                   </Card.Body>            
                </Card>        
            </CardGroup>    
        </div>    
        );
    }
export default Home;
