import React, { useState, useEffect } from 'react'

import axios from 'axios'
// reactstrap components
import {
  Container,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

import Cards from './Cards.js';
import Chart from './Chart.js';

function Dashboard() {
    
  const url= "https://covid19.mathdro.id/api";

  const [data, setData] = useState([])
  const [dailyData, setdailyData] = useState([])
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")

  useEffect( ()=>{

    const fetchData = async ()=>{
      const {data: {confirmed, recovered, deaths, lastUpdate} }= await axios(url)
      setData({confirmed, recovered, deaths, lastUpdate} );
    }
    
    fetchData()
}, [setData] )


    useEffect( ()=>{

        const fetchDailyData = async ()=>{
        const {data} = await axios(`${url}/daily`)
        setdailyData(data)
        }
        
        fetchDailyData()
    }, [] )

    useEffect( ()=>{

        const fetchCountries = async ()=>{

        // let modifiedUrl= "https://covid19.mathdro.id/api";

        // console.log(!country)
        
        // !country ? modifiedUrl= `${url}/countries` : modifiedUrl=`${url}/{country}`

        const {data: {countries}} = await axios(`${url}/countries`)
        const allCountries = countries.map(country => country.name)
        setCountries(allCountries)
        }
        
        fetchCountries()
    }, [country] )

    useEffect( ()=>{

        const fetchCountries = async ()=>{

        if(!country){
            return null;
        } 

        const modifiedUrl= `${url}/countries/${country}`

        console.log(modifiedUrl)
        const {data: {confirmed, recovered, deaths, lastUpdate} } = await axios(modifiedUrl)

        setData({confirmed, recovered, deaths, lastUpdate} );
        }
        
        fetchCountries()
    }, [country] )

    const handleChange = (country) => {
        if(!country){
        return null;
        }
        setCountry(country)
    }


    const [bigChartData, setbigChartData] = useState("data1")
    
    return (
        <>
            
            <Container fluid={true}>                
                <div className="content mt-4">
                    <Row className="mb-2">
                        <Col lg="3" md="3" className="mt-3"><h1> Covid-19</h1> </Col>
                        <Col lg="6" md="6" className="text-center mt-3">
                            <h1>Pakistan</h1>
                        </Col>
                        <Col lg="3" md="3">
                            <Label for="exampleSelectMulti">Select Country</Label>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" >
                                <option>Global</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>
                    </Row>
                    <Cards data={data} />
                    <Chart dailyData={dailyData}  /> 
                </div>
            </Container>

        </>
    )
}

export default Dashboard
