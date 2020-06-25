import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Data/lessons.json';
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

function HomeFirst(props) {
    let lekcije = data['lekcije'].slice(props.start,props.stop)
   
   return  (<React.Fragment>
   
   {lekcije.map(
        (lekcija,index)=>{
            let number = (props.start+index)+1;
            return (<Row className="">
                <Col>
                    <Card>
                        <Card.Body>
                            <Badge style={{paddingLeft: "0",}} className="imelekcije">{number}</Badge>
                            <div className="sectonRight">
                                <Card.Title>{lekcija[0].title} </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{lekcija[0].subtitle}</Card.Subtitle>
                                <Link to={"/lekcija"+number} style={{ color: 'inherit' }}>
                                <IconContext.Provider value={{ color: "#92623C" }}>
                                    <button className="pristupiBtn">Pristupi <IoIosArrowForward /></button>
                                </IconContext.Provider>
                                </Link>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* <Col>
                    <Link to={"/lekcija"+(number+1)} style={{ color: 'inherit' }}><Card>
                        <Card.Body>
                            <Card.Title>{lekcija[1].title} <Badge className="imelekcije" variant="light">Lekcija {number+1}</Badge> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lekcija[1].subtitle}</Card.Subtitle>
                        </Card.Body>
                    </Card></Link>
                </Col> */}
            </Row>)
          
            }
            )}
            </React.Fragment>)

      

}

export default HomeFirst;