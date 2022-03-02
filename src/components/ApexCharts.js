import React, { useEffect, useRef, useState } from 'react'
import Chart from 'react-apexcharts'
import { Rings } from 'react-loader-spinner';
import { dateData, getDay } from '../utils/dateUtils';

export default function ApexCharts({ type, dataY, dataX }) {
  // console.log('ApexCharts :: dataX :: ', dataX);
  // console.log('ApexCharts :: dataY :: ', dataY);

  const optionsStructure = {
    chart: {
      height: 350,
      width: '100%',
      type: "line",
      // stacked: true,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#31E498", "#FF5C00"],
    stroke: {
      width: [4, 4]
    },
    xaxis: {
      categories: []
    },
    yaxis: [
      {
        labels: (() => {
          return {
            style: {
              colors: "#000",
              fontWeight: 'bold',
              fontSize: '12px'
            },
            textAnchor: 'middle',
            formatter: function (value) {
              return `${value}`
            }
          }
        })(),
      },
    ],
    legend: {
      horizontalAlign: "bottom",
      offsetX: 40
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        }
      }
    },
    noData: {
      text: 'Loading...',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: 'red',
        fontSize: '14px',
        fontFamily: undefined
      },
      yaxis: {
        labels: {
          style: {
            colors: "#000",
            fontWeight: 'bold',
            fontSize: '0px'
          },
        }
      }
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },

  }

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(optionsStructure)

  useEffect(() => {
    if (!type) return;
    if (dataY.length === 0) return;
    if (dataX.length === 0) return;

    setSeries(dataY)

    const lastIndex = dataX.length - 1;
    const dupX = dataX.map((v, i) => {
      if (i === 0 || i === lastIndex) {
        let { year, month, day } = dateData(v);
        day = getDay(day);
        return `${month} ${day}`
      } else {
        return ''
      }
    })
    setOptions(prev => {
      return {
        ...prev,
        xaxis: {
          categories: dupX
        },
        yaxis: [
          {
            labels: (() => {
              return {
                style: {
                  colors: "#000",
                  fontWeight: 'bold',
                  fontSize: '12px'
                },
                textAnchor: 'middle',
                formatter: function (value) {
                  if (type === 'revenue') {
                    return `₹ ${value}`;
                  } else if (type === 'engagement') {
                    return ` ${value} M`;
                  } else if (type === 'audience') {
                    return ` ${value} %`;
                  } else {
                    // invalid prop
                    return value
                  }
                }
              }
            })(),
          },
        ]
      }
    })

  }, [type, dataY, dataX])

  // console.log("ApexCharts :: series ::", series);
  // console.log("ApexCharts :: options ::", options);
  return (
    <>
      <div className='pt-6'>
        {series.length > 0 && options.xaxis.categories.length > 0 && type ?
          <Chart options={options} series={series} type="line" width={'100%'} height={350} /> :
          <div className='flex items-center justify-center' style={{ width: '100%', height: '200px' }}>
            <Rings ariaLabel="loading-indicator" />
          </div>
        }
      </div>
    </>
  )
}
