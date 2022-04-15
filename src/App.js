import { useEffect, useState } from "react";
import MyApexChart from "./ApexChart";
import data from './data';
import "./App.css";

export default function App() {
  const [series, setSeries] = useState([])
  const [startDate, setStartDate] = useState( new Date().getTime() );
  const [endDate, setEndDate] = useState(new Date().getTime() );

  useEffect(() => {
    async function asyncFun() {
      return data;
    }
    asyncFun().then(res => {
      setSeries(res);
      setStartDate(res[0][0])
      setEndDate((res[res.length - 1][0]))

    }).catch(err => {
      console.log(err);
    })

  }, [])
  
  const startDateHandler = e => {
    setStartDate(new Date(e.target.value).getTime())
  }

  const endDateHandler = e => {
    setEndDate(new Date(e.target.value).getTime())
  }

  console.log('series.length : ', series.length)
  console.log('startDate : ', startDate)
  console.log('endDate : ', endDate)
  console.log('series[0] : ', series[0])

  if (series.length === 0) {
    return (
      <div className="App">
        No VALUE
      </div>
    );
  } else {
    return (
      <div className="App">
        <div style={{width: '70%', margin: '30 auto'}} >
          <MyApexChart series={series.filter(s => startDate <= s[0] && s[0] <= endDate ) } />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div>Select the date range</div>
          <input type='date' onChange={startDateHandler}  placeholder="start date"  />
          <input type='date' onChange={endDateHandler} placeholder="end date" />
        </div>
      </div>
    )
  }



}
