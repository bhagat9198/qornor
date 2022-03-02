import React, { useEffect, useState } from 'react'
import ApexCharts from './ApexCharts'
import CardHeading from './CardHeading'
import CardOutline from './CardOutline';

export default function Card({ type, data }) {
  const [seriesX, setSeriesX] = useState([]);
  const [seriesY, setSeriesY] = useState([]);
  const x = [];
  const y1 = [];
  const y2 = [];


  useEffect(() => {
    if (data !== undefined && type === 'audience') {
      data.data.map(value => {
        if (value.date) {
          x.push(value.date)
        }
        if (value.value1) {
          y1.push(value.value1)
        }
        if (value.value2) {
          y2.push(value.value2)
        }
      })
      setSeriesX(x);
      setSeriesY([
        {
          name: data.dataFieldMapping.value1,
          data: y1
        },
        {
          name: data.dataFieldMapping.value2,
          data: y2
        }
      ])
    } else if (data !== undefined && (type === 'revenue' || type === 'engagement')) {
      console.log("Card :: data :: ", data);
      data.data.map(value => {
        if (value.date) {
          x.push(value.date)
        }
        if (value.value1) {
          y1.push(value.value1)
        }
  
      })
      setSeriesX(x);
      setSeriesY([
        {
          name: data.dataFieldMapping.value1,
          data: y1
        },
      ])
    } else {
      // wrong type
    }
  }, [data])

  // console.log("Card :: seriesY :: ", seriesY);
  // console.log("Card :: seriesX :: ", seriesX);

  return (
    <>
      <CardOutline>
        <CardHeading />
        <ApexCharts type={type} dataY={seriesY} dataX={seriesX} />
      </CardOutline>
    </>
  )
}
