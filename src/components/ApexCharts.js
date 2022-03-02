import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { Rings } from 'react-loader-spinner';

export default function ApexCharts({ type, dataY, dataX }) {
  console.log('ApexCharts :: dataX :: ', dataX);
  console.log('ApexCharts :: dataY :: ', dataY);

  // const [formate, setFormate] = useState([]);

  // if(type === 'revenue') {
  //   setFormate()
  // } else if(type === 'engagement') {

  // } else if(type === 'audience') {

  // } else {
  //   // invalid prop
  // }

  // const series = [
  //   {
  //     name: "Series A",
  //     data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  //   },
  //   {
  //     name: "Series B",
  //     data: [4.4, 4, 5.5, .5, 12.5, 102.8, 39.8, 90.6]
  //   },
  // ]


  const optionsStructure = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#31E498", "#FF5C00"],
    // series: [
    //   {
    //     name: "Series A",
    //     data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    //   },
    // ],
    stroke: {
      width: [4, 4]
    },
    // plotOptions: {
    //   bar: {
    //     columnWidth: "80%"
    //   }
    // },
    xaxis: {
      // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      categories: dataX
    },
    yaxis: [
      {
        // axisTicks: {
        //   show: false
        // },
        labels: () => {
          if (dataY.length === 0) return;
          return {
            style: {
              colors: "#000",
              fontWeight: 'bold',
              fontSize: 12
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
              }

            }
          }
        },

      },
      // {
      //   opposite: false,
      //   axisTicks: {
      //     show: true
      //   },
      //   axisBorder: {
      //     show: true,
      //     color: "#247BA0"
      //   },
      //   labels: {
      //     style: {
      //       colors: "#247BA0"
      //     }
      //   },

      // }
    ],
    // tooltip: {
    //   shared: false,
    //   intersect: true,
    //   x: {
    //     show: false
    //   }
    // },
    legend: {
      horizontalAlign: "bottom",
      offsetX: 40
    },
    noData: {
      text: 'Loading...',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: 'red',
        fontSize: 14,
        fontFamily: undefined
      },
      yaxis: {
        labels: {
          style: {
            colors: "#000",
            fontWeight: 'bold',
            fontSize: 0
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
    }
  }

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(optionsStructure)

  useEffect(() => {
    if (dataY.length > 0) {
      setSeries(dataY)
    }

    if (dataX.length > 0 && type) {
      setOptions(prev => {
        return {
          ...prev,
          xaxis: {
            categories: dataX
          },
          yaxis: [...prev.yaxis,
          {
            labels: () => {
              if (dataY.length === 0) return;
              return {
                style: {
                  colors: "#000",
                  fontWeight: 'bold',
                  fontSize: 12
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
                  }

                }
              }
            },
          },
          ]
        }
      })
    }
  }, [type, dataY, dataX])

  console.log("ApexCharts :: series ::", series);
  console.log("ApexCharts :: options ::", options);
  return (
    <>
      {series.length > 0 && options.xaxis.categories.length > 0 ?
        <Chart options={options} series={series} type="line" width={'100%'} height={'100%'} /> :
        <Rings ariaLabel="loading-indicator" />
      }
    </>
  )
}
