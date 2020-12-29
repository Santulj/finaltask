import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import '../assets/css/all.css';

function Abonents() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
{/* NAVIGATION */}
            <ul className="nav" >
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Abonementi</NavLink>
                </li>
            </ul>
{/* ABONEMENTS */}
            <div className="jumbotron abonentsJumptron"> 
                <h5 className="display-4">Abonementi</h5>
                <p className="lead">Izvēlies sev piemērotāko Coworking Liepaja abonementu. 
                    Ja neesi līdz šim bijis pazīstams ar kopstrādes birojiem un neesi pārliecināts par savu izvēli, 
                    piesaki izmēģinājuma dienu un iepazīsti kopstrādes biroju priekšrocības</p>
                <hr className="my-4"/>
                <p>Piezīme: cenas norādītas bez pievienotās vērtības nodokļa (PVN) 21%</p>
            </div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>DIENAS ABONEMENTS</Card.Title>
                        <Card.Text >
                            <h1>15 EUR</h1>
                            <p>dienā</p>
                            <p>_______________________</p>
                            <p>Pieeja WiFi </p>
                            <p>Printeris, skeneris</p>  
                            <p>Kafija, ūdens</p>  
                            <p>-</p>  
                            <p>-</p>  
                            <p>-</p>  
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink className="nav-link active" to="/resident"><button className="btn btn-primary">Vairāk informācijas</button></NavLink>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>7 DIENU ABONEMENTS</Card.Title>
                        <Card.Text>
                            <h1>60 EUR</h1>
                            <p>mēnesī</p>
                            <p>_______________________</p>
                            <p>Pieeja WiFi </p>
                            <p>Printeris, skeneris</p>  
                            <p>Kafija, ūdens</p>  
                            <p>Pieeja sapulču telpām</p>  
                            <p>Pieeja birojam 24/7</p>  
                            <p>-</p> 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink className="nav-link active" to="/resident"><button className="btn btn-primary">Vairāk informācijas</button></NavLink>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>NEFIKSĒTA DARBA VIETA</Card.Title>
                        <Card.Text>
                            <h1>60 EUR</h1>
                            <p>mēnesī</p>
                            <p>_______________________</p>
                            <p>Pieeja WiFi </p>
                            <p>Printeris, skeneris</p>  
                            <p>Kafija, ūdens</p>  
                            <p>Pieeja sapulču telpām</p>  
                            <p>Pieeja birojam 24/7</p>  
                            <p>-</p> 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink className="nav-link active" to="/resident"><button className="btn btn-primary">Vairāk informācijas</button></NavLink>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>FIKSĒTA DARBA VIETA</Card.Title>
                        <Card.Text>
                            <h1>90 EUR</h1>
                            <p>mēnesī</p>
                            <p>_______________________</p>
                            <p>Pieeja WiFi </p>
                            <p>Printeris, skeneris</p>  
                            <p>Kafija, ūdens</p>  
                            <p>Pieeja sapulču telpām</p>  
                            <p>Pieeja birojam 24/7</p>  
                            <p>-</p> 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink className="nav-link active" to="/resident"><button className="btn btn-primary">Vairāk informācijas</button></NavLink>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>REZIDENTS</Card.Title>
                        <br/>
                        <Card.Text>
                            <h1>120 EUR</h1>
                            <p>mēnesī</p>
                            <p>_______________________</p>
                            <p>Pieeja WiFi </p>
                            <p>Printeris, skeneris</p>  
                            <p>Kafija, ūdens</p>  
                            <p>Pieeja sapulču telpām</p>  
                            <p>Pieeja birojam 24/7</p>  
                            <p>Juridiskā adrese</p>  
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer >
                        <NavLink className="nav-link active" to="/resident"><button className="btn btn-primary">Vairāk informācijas</button></NavLink>
                    </Card.Footer>
                </Card>
            </CardDeck>
{/* PAGINATION */}
            <div className="abonentsPagination" >
                <Pagination size="sm">{items}</Pagination>
            </div>
        </div >
    )
}

export default Abonents;