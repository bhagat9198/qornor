import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

const MyApexChart = (props) => {
  const { series } = props;

  console.log('MyApexChart :: series', series.length);

  const optionsStructure = {
    chart: {
      height: 350,
      width: '100%',
      type: "line",
    },
    xaxis: {
      type: 'datetime',
      categories: [],
    },
  };


  const [options, setOptions] = useState(optionsStructure)
  const [seriesY, setSeries] = useState([{
    name: "Value",
    data: []
  }])

  useEffect(() => {
    let dupX = [];
    let dupY = [];
    series.forEach((value) => {
      dupX.push(value[0])
      dupY.push(value[1])
    })

    // console.log('dupX :: ', dupX.length)

    setSeries(prevState => {
      return [
        {
          name: "Value",
          data: dupY
        }
      ]
    });
    setOptions(op => {
      return {
        ...op,
        xaxis: {
          type: 'datetime',
          categories: dupX
        }
      }
    })
  }, [series.length])


  console.log(options)
  console.log(seriesY)

  return (
    <>
      <Chart options={options} series={seriesY} type="line" width={'100%'} height={350} /> 
    </>
  );
};

export default MyApexChart;
