import { useEffect, useState } from 'react';
import Body from './containers/Body';
import Header from './containers/Header';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      console.log('Body :: rawRes :: ', rawRes);
      if(rawRes.status === 200) {
        return rawRes.json(rawRes);
      } else {
        // new Error(rawRes)
        throw(rawRes)
      }
    }).then(response => {
      console.log('App :: main data :: response :: ', response);
      setData(response);
      toast.success(`Data fetched successfully`)
    }).catch(err => {
      console.log(err);
      const errCode = err.status;
      const errMessage = err.statusText;
      toast.error(`${errCode} : ${errMessage }`)
    })

    const d1 = new Date(date.startDate).getTime();
    const d2 = new Date(date.endDate).getTime();
    const diff = d2 - d1;
    const days = diff / (60 * 60 * 24 * 1000);
    setToggleDropdown(prev => {
      return {
        ...prev,
        value: `Last ${days + 1} days`
      }
    })
  }, [date]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header data={data.metadata} />
      <Body date={date} setDate={setDate} data={data} toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} />
    </>

  )
}

export default App;
