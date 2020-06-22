import React from 'react'

function CountryPicker( {countries, handleChange} ) {


    const countriesApi = countries.length ?
         (  countries.map( (country,index) => <option key={index} value={country}> {country}</option> ) ) : (<option>{'loading'}</option>)
    return (
        <div>
            <h1>CountryPicker</h1>

            <select name="" onChange={ e => handleChange(e.target.value)} id="">
                <option value="global">Global</option>
                {countriesApi}
            </select>
        </div>
    )
}

export default CountryPicker
