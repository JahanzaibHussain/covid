import React, { useState } from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Container,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.js";


function Chart({dailyData}) {

    const [bigChartData, setbigChartData] = useState("data1")

    return (
        < >
            <Row>
                <Col xs="12">
                <Card className="card-chart">
                    <CardHeader>
                    <Row>
                        <Col className="text-left" sm="6">
                        <h5 className="card-category">Last Year </h5>
                        <CardTitle tag="h2">Total Cases</CardTitle>
                        </Col>
                        <Col sm="6">
                        <ButtonGroup
                            className="btn-group-toggle float-right"
                            data-toggle="buttons"
                        >
                            <Button
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: bigChartData === "data1"
                                })}
                                color="info"
                                id="0"
                                size="sm"
                                onClick={() => setbigChartData("data1")}
                            >
                            <input
                                defaultChecked
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Confirmed
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-single-02" />
                            </span>
                            </Button>
                            <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                                active: bigChartData === "data2"
                            })}
                            onClick={() => setbigChartData("data2")}
                            >
                            <input
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Deaths
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-gift-2" />
                            </span>
                            </Button>
                            <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                                active: bigChartData === "data3"
                            })}
                            onClick={() => setbigChartData("data3")}
                            >
                            <input
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Recover
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-tap-02" />
                            </span>
                            </Button>
                        </ButtonGroup>
                        </Col>
                    </Row>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-area">
                        <Line
                            labels
                            data={chartExample1[bigChartData]}                            
                            options={chartExample1.options}
                        />
                    </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>     
        </>
    )
}

export default Chart
