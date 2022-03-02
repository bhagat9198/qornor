import { useEffect, useState } from 'react';
import Body from './containers/Body';
import Header from './containers/Header';
import 'react-loading-skeleton/dist/skeleton.css'

const BASE_URL = `https://qorner-mock-server.herokuapp.com/stats`;

function App() {
  const [data, setData] = useState({
    revenueDetails: null,
    reachAndEngagementDetails: null,
    audienceDetails: null,
    summary: null,
    metadata: null
  });

  const [date, setDate] = useState({
    startDate: '2021-01-01',
    endDate: '2021-01-31',
  })

  const [toggleDropdown, setToggleDropdown] = useState({
    value: '',
    status: 'hidden'
  })


  useEffect(() => {
    fetch(`${BASE_URL}?startDate=${date.startDate}&endDate=${date.endDate}`).then(rawRes => {
      // console.log('Body :: rawRes :: ', rawRes);
      return rawRes.json();
    }).then(response => {
      console.log('App :: main data :: response :: ', response);
      setData(response)
    }).catch(err => {
      console.error(err);
      const errCode = err.status;
      const errMessage = err.message;
    })

    const d1 = new Date(date.startDate).getTime();
    const d2 = new Date(date.endDate).getTime();
    const diff = d2 - d1;
    const days = diff/(60*60*24*1000);
    setToggleDropdown(prev => {
      return {
        ...prev,
        value: `Last ${days + 1} days`
      }
    })
  }, [date]);

  return (
    <>
      <Header data={data.metadata} />
      <Body date={date} setDate={setDate} data={data} toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} />
    </>

  )
}

export default App;
