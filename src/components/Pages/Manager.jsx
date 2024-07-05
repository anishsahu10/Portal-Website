import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"
function Manager() {
  const [state, setState] = useState( {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });  
  return (
    <>
    <div className='row'>
    <div className='col-4'>
            {/* <h1 className='management'>Manager</h1> */}
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
                />
        </div>

        <div>
        <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
                />
        </div>
    </div>
        <div className='col-4'>
            {/* <h1 className='management'>Manager</h1> */}
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
                />
        </div>

        <div>
        <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
                />
        </div>
    </>
  )
}

export default Manager;