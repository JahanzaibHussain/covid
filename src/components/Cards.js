import React from 'react'
// reactstrap components
import CountUp from 'react-countup'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";
  
function Cards({data:  {confirmed, recovered, deaths} } ) {

    if(!confirmed){
        return <h2 className="text-center"> Loading.... </h2>
    }
    return (
        <>
          <Row>
                <Col lg="4">
                    <Card className="card-chart">
                        <CardHeader>
                        <h5 className="card-category">Effected</h5>
                        <CardTitle tag="h1">
                            <i className="tim-icons icon-sound-wave text-info" /> {" "}
                            <CountUp
                                className="text-info"
                                start={0}
                                end={confirmed.value}
                                separator={','}
                                duration={1}
                            />
                        </CardTitle>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>

                    </Card>
                </Col>
                <Col lg="4">
                    
                    <Card className="card-chart">
                        <CardHeader>
                        <h5 className="card-category">Total Recovered</h5>
                        <CardTitle tag="h1">
                            <i className="tim-icons icon-bulb-63 text-success"/>
                            {" "}
                            <CountUp 
                                className="text-success"
                                start={0}
                                end={recovered.value}
                                separator={','}
                                duration={1}
                            />
                        </CardTitle>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Total Deaths</h5>
                        <CardTitle tag="h1">
                            <i className="tim-icons icon-alert-circle-exc  text-primary" />{" "}
                            <CountUp
                                className="text-danger"
                                start={0}
                                end={deaths.value}
                                separator={','}
                                duration={1}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        
                    </CardBody>
                </Card>
                </Col>
                
            </Row>  
        </>
    )
}

export default Cards
