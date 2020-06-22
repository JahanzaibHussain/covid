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

import { Line, Bar } from "react-chartjs-2";
// core components
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4
  } from "../variables/charts.js";
  
function Cards({data:  {confirmed, recovered, deaths, lastUpdate} } ) {

    if(!confirmed){
        return <h2 className="text-center"> Loading.... </h2>
    }
    return (
        <>
          <Row>
                <Col lg="4">
                    <Card className="card-chart">
                    <CardHeader>
                    <h5 className="card-category">Total Recovered</h5>
                    <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info"/>
                        {" "}
                        <CountUp
                            start={0}
                            end={recovered.value}
                            separator={','}
                            duration={2}
                        />
                    </CardTitle>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-area">
                        <Line
                            data={chartExample2.data}
                            options={chartExample2.options}
                        />
                    </div>
                    </CardBody>
                </Card>
                </Col>
                <Col lg="4">
                    <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Total Deaths</h5>
                        <CardTitle tag="h3">
                            <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                            <CountUp
                                start={0}
                                end={deaths.value}
                                separator={','}
                                duration={2}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            <Bar
                            data={chartExample3.data}
                            options={chartExample3.options}
                            />
                        </div>
                    </CardBody>
                </Card>
                </Col>
                <Col lg="4">
                    <Card className="card-chart">
                    <CardHeader>
                    <h5 className="card-category">Effected</h5>
                    <CardTitle tag="h3">
                        <i className="tim-icons icon-send text-success" /> {" "}
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            separator={','}
                            duration={2}
                        />
                    </CardTitle>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-area">
                        <Line
                            data={chartExample4.data}
                            options={chartExample4.options}
                        />
                    </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>  
        </>
    )
}

export default Cards
