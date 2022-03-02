import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import Card from '../components/Card'
import CardOutline from '../components/CardOutline';
import Dropdown from '../components/Dropdown';
import Heading from '../components/Heading'

export default function Body() {
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

  const BASE_URL = `https://qorner-mock-server.herokuapp.com/stats`

  useEffect(() => {
    fetch(`${BASE_URL}?startDate=${date.startDate}&endDate=${date.endDate}`).then(rawRes => {
      // console.log('Body :: rawRes :: ', rawRes);
      return rawRes.json();
    }).then(response => {
      console.log('Body :: main data :: response :: ', response);
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

  const dropdownHandler = ({value}) => {
    setToggleDropdown(prev => {
      if (prev.status === 'hidden') {
        return {
          ...prev,
          status: ''
        }
      } else {
        return {
          ...prev,
          status: 'hidden'
        }
      }
    })
    if(!value) return;
    
    const sDate = (value.split('::')[0]).trim();
    const eDate = (value.split('::')[1]).trim();

    // console.log('dropdownHandler :: sDate :: ', sDate);
    // console.log('dropdownHandler :: eDate :: ', eDate);

    setDate({
      endDate: eDate,
      startDate: sDate
    })
  }

  return (
    <>
      <div style={{ background: '#fff' }}>

        <div className='px-7'>
          <div className='flex justify-between'>
            <Heading heading='Summary' date={date} />
            <div className='py-3 '>
              <Dropdown toggleDropdown={toggleDropdown} dropdownHandler={dropdownHandler} />
            </div>
          </div>
          <div className='my-4'>
            <CardOutline  >
              <div className='flex justify-around p-3'>
                <div>
                  <p style={{fontWeight: 600, fontSize: '10px', lineHeight: '15px'}}>Subscribers</p>
                  <h2 className='flex' style={{fontWeight: 600, fontSize: '18px', lineHeight: '27px'}} >{data?.summary?.subscribers ? data.summary.subscribers : <Skeleton className='pr-7 mr-2 ' style={{width: '20px'}} />} <span> M</span> </h2>
                </div>
                <div>
                  <p style={{fontWeight: 600, fontSize: '10px', lineHeight: '15px'}}>Views</p>
                  <h2 className='flex' style={{fontWeight: 600, fontSize: '18px', lineHeight: '27px'}}>{data?.summary?.views ? data.summary.views : <Skeleton className='pr-7 mr-2 ' style={{width: '20px'}} />} k</h2>
                </div>
                <div>
                  <p style={{fontWeight: 600, fontSize: '10px', lineHeight: '15px'}}>Revenue</p>
                  <h2 className='flex' style={{fontWeight: 600, fontSize: '18px', lineHeight: '27px'}} ><span className='pr-2'>₹</span>  {data?.summary?.revenue ? data.summary.revenue :  <Skeleton className='pr-7 mr-2 ' style={{width: '20px'}} />} <span style={{fontWeight: 500, fontSize: '14px', lineHeight: '21xp' }} >lac</span> </h2>
                </div>
              </div>
            </CardOutline>
          </div>
          <div className='my-4'>
            <Heading heading='Revenue' date={date} />
          </div>
          <div className='my-4'>
            <Card type="revenue" data={data?.revenueDetails?.estimatedRevenueTrend} />
          </div>
          <div className='my-4'>
            <Heading heading='Reach & engagement' date={date} />
          </div>
          <div className='my-4'>
            <Card type="engagement" data={data?.reachAndEngagementDetails?.viewsTrend} />
          </div>
          <div className='my-4'>
            <Heading heading='Audience' date={date} />
          </div>
          <div className='my-4'>
            <Card type="audience" data={data?.audienceDetails?.viewsSubscriberVsNonSubscribersTrend} />
          </div>
        </div>
      </div>
    </>
  )
}
