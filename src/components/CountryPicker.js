import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/covidLogo.png'

// reactstrap components
import {
    Row,
    Col,
    Label,
    Input,
    Container
} from "reactstrap";

  function CountryPicker( {countries, handleChange, country} ) {


    const countriesApi = countries.length ?
         (  countries.map( (country,index) => <option key={index} value={country}> {country}</option> ) ) : (<option>{'loading'}</option>)

    return (
        <div>

            <Row className="mb-2">
                <Col lg="4" md="4" className="mt-3 text-center text-md-left">
                    <Link to="/">
                        <h2><img className="logo" src={logo} alt="Logo" />  Covid-19</h2> 
                    </Link>
                </Col>
                <Col lg="4" md="4" className="text-center mt-4">
                    <h1>{country}</h1>
                </Col>
                <Col lg="4" md="4">
                    <Label for="exampleSelectMulti">Select Country</Label>
                    <Input defaultValue={'DEFAULT'} type="select" onChange={ e => handleChange(e.target.value)} >
                        <option value="DEFAULT" disabled>Choose a country...</option>
                        {countriesApi}
                    </Input>
                </Col>
            </Row>
        </div>
    )
}

export default CountryPicker