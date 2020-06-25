import React, { useState, useEffect } from 'react'

import  '../assets/css/app.css'
import axios from 'axios'
// reactstrap components

import Cards from './Cards.js';
import Chart from './Chart.js';
import CountryPicker from './CountryPicker.js';
import Tables from './Tables.js';

import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";


function Dashboard() {
    
  const url= "https://covid19.mathdro.id/api";

  const [data, setData] = useState([])
  const [dailyData, setdailyData] = useState([])
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")
  const [countryData, setCountryData] = useState([])

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
            const {data: {confirmed, recovered, deaths, lastUpdate} } = await axios(modifiedUrl)
            setData({confirmed, recovered, deaths, lastUpdate} );
        }

        const fetchCountryData = async ()=>{
            if(!country){
                return null;
            } 
            const modifiedUrl= `${url}/countries/${country}/confirmed`
            const {data } = await axios(modifiedUrl)
            setCountryData(data);
        }

        fetchCountries()
        fetchCountryData()

    }, [country] )

    const handleChange = (country) => {
        if(!country){
            return null;
        }
        setCountry(country)
    }

    const output = ( !countryData.length ) ? <Chart dailyData={dailyData} /> : <Tables countryData={countryData} />
    return (
        <>
            
            <Container fluid={true}>                
                <div className="content mt-4">
                    <CountryPicker country={country} countries={countries} handleChange={handleChange}  />
                    <Cards data={data} />
                    {output}
                    <footer className="text-center">
                        <div className="copyright">
                            © {new Date().getFullYear()} made by{" "}
                            <a
                            href="https://github.com/JahanzaibHussain"
                            target="_blank"
                            >
                            @Zaib 
                            </a>{" "} with{" "}
                            <i className="tim-icons icon-heart-2" />
                        </div>
                    </footer>
            </div>

            </Container>

        </>
    )
}

export default Dashboard
