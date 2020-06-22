import React from 'react'
import CountUp from 'react-countup'

function Cards( {data:  {confirmed, recovered, deaths, lastUpdate} } ) {

    if(!confirmed){
        return "Loading...."
    }
    return (
        <div>
            <h1>Cards </h1>
            <h3>Confirmed 
                 &nbsp;
                <CountUp
                    start={0}
                    end={confirmed.value}
                    separator={','}
                    duration={2}
                />
                
                </h3>
            <hr/>
            <h3>Recoverd   &nbsp;
                <CountUp
                    start={0}
                    end={recovered.value}
                    separator={','}
                    duration={2}
                />  </h3>
            <hr/>
            <h3>deaths   &nbsp;
                <CountUp
                    start={0}
                    end={deaths.value}
                    separator={','}
                    duration={2}
                />  </h3>
            <hr/>
            <h3>lastUpdate {new Date( lastUpdate ).toDateString()  } </h3>
        </div>
    )
}

export default Cards
