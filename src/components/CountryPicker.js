import React from 'react'

// reactstrap components
import {
    Row,
    Col,
    Label,
    Input
} from "reactstrap";

  function CountryPicker( {countries, handleChange, country} ) {


    const countriesApi = countries.length ?
         (  countries.map( (country,index) => <option key={index} value={country}> {country}</option> ) ) : (<option>{'loading'}</option>)

    return (
        <div>

            <Row className="mb-2">
                <Col lg="3" md="3" className="mt-3"><h1> Covid-19</h1> </Col>
                <Col lg="6" md="6" className="text-center mt-3">
                    <h1>{country}</h1>
                </Col>
                <Col lg="3" md="3">
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