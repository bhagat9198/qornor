import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ApexCharts from './ApexCharts'
import CardHeading from './CardHeading'
import CardOutline from './CardOutline';

export default function Card({ type, data }) {
  // console.log('Card :: data ::', data);
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
      let name1, name2;
      if (data.dataFieldMapping.value1 === 'subscribersCount') {
        name1 = 'Subscribed'
      }
      if (data.dataFieldMapping.value2 === 'nonSubscribersCount') {
        name2 = 'Non Subscribed'
      }
      setSeriesY([
        {
          name: name1,
          data: y1
        },
        {
          name: name2,
          data: y2
        }
      ])
    } else if (data !== undefined && (type === 'revenue' || type === 'engagement')) {
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
        <div className='pl-3 py-4'>
          <CardHeading info={data?.change?.info} type={type} value={data?.value} subVal={data?.change?.percentage} />
          <div className='border-b-2  relative top-11' style={{ borderColor: '#DCDCDC' }}></div>
        </div>
        <ApexCharts type={type} dataY={seriesY} dataX={seriesX} />
      </CardOutline>
    </>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
}
