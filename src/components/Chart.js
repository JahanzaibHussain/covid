import React from 'react'
import {Line} from 'react-chartjs-2'

function Chart({dailyData}) {

    const chartData = ( labels, title ,data canvas ) => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
          labels: labels,
          datasets: [
            {
              label: title,
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#1f8ef1",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#1f8ef1",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: data
            }
          ]
        };
      }

      console.log("chartData")
      console.log(chartData)
    
    
    dailyData = dailyData.slice(0,50);
    const lineChart = dailyData.length ? (
        <Line
            data={
                {
                    labels: dailyData.map( ({reportDate}) => reportDate ),
                    datasets: [
                        {
                            label: "Infected",
                            data:  dailyData.map( ({confirmed}) => confirmed.total ),
                            borderColor: 'Yellow',
                            backgroundColor: 'rgba(0,0,255,0.6)',
                            fill: true
                        },
                        {
                            label: "Deaths",
                            data:  dailyData.map( ({deaths}) => deaths.total ),
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.6)',
                            fill: true
                        },
                        {
                            label: "Recovered",
                            data:  dailyData.map( ({recovered}) => recovered.total ),
                            fill: true,
                            borderColor: 'blue',
                            backgroundColor: 'rgba(0,255,0,0.6)',
                        },
                    ]
                }                
            }
        />
    ) : 'loading'

    return (
        <div>
            <h1>Chart</h1>  
            {lineChart} 
        </div>
    )
}

export default Chart
