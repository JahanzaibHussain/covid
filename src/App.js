import React, {useState, useEffect} from 'react';
import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import axios from 'axios'

function App() {

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


  return (
    <div>

        <Cards data={data}/>
        <CountryPicker countries={countries} handleChange={handleChange} />
        <Chart dailyData={dailyData}  />

    </div>
  );
}

export default App;
