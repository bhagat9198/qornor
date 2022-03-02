import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import Card from '../components/Card'
import CardOutline from '../components/CardOutline';
import Dropdown from '../components/Dropdown';
import Heading from '../components/Heading'

export default function Body({ date, setDate, data, setToggleDropdown, toggleDropdown }) {
  const dropdownHandler = ({ value = false }) => {
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
    if (!value) return;

    const sDate = (value.split('::')[0]).trim();
    const eDate = (value.split('::')[1]).trim();

    // console.log('dropdownHandler :: sDate :: ', sDate);
    // console.log('dropdownHandler :: eDate :: ', eDate);
    setDate({
      endDate: eDate,
      startDate: sDate
    })
  }

  useEffect(() => {
    const clickSubscribe = document.addEventListener('click', e => {
      let elId = e.target.id;
      if (elId === 'dropdown' || elId === 'op1' || elId === 'op2' || elId === 'op3') return;
      if (toggleDropdown.status !== 'hidden') {
        setToggleDropdown(prev => {
          return {
            ...prev,
            status: 'hidden'
          }
        })
        dropdownHandler()
      }
    })

    return () => clickSubscribe;
  }, [toggleDropdown])

  return (
    <>
      <div className='px-5  mb-64'>
        <div className='flex justify-between'>
          <Heading heading='Summary' date={date} />
          <div className='py-3 '>
            <Dropdown toggleDropdown={toggleDropdown} dropdownHandler={dropdownHandler} />
          </div>
        </div>
        <div className='mt-5 mb-10'>
          <CardOutline  >
            <div className='flex justify-around p-3'>
              <div className='font-bold'>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Subscribers</p>
                <h2 className='flex' style={{ fontSize: '18px' }} >{data?.summary?.subscribers ? data.summary.subscribers : <Skeleton className='pr-7 mr-2 ' style={{ width: '20px' }} />} <span className='pl-1' > M</span> </h2>
              </div>
              <div className='font-bold'>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Views</p>
                <h2 className='flex' style={{ fontSize: '18px' }}>{data?.summary?.views ? data.summary.views : <Skeleton className='pr-7 mr-2 ' style={{ width: '20px' }} />} <span className='pl-1'>k</span> </h2>
              </div>
              <div className='font-bold'>
                <p style={{ fontSize: '14px', color: '#9A9A9A' }}>Revenue</p>
                <h2 className='flex' style={{ fontSize: '18px' }} >
                  <span className='pr-1'>₹</span>
                  {data?.summary?.revenue ? data.summary.revenue : <Skeleton className='pr-7 mr-2 ' style={{ width: '20px' }} />}
                  <span className='pl-1' style={{ fontSize: '18px' }}> lac</span>
                </h2>
              </div>
            </div>
          </CardOutline>
        </div>
        <div className='my-4'>
          <Heading heading='Revenue' date={date} />
        </div>
        <div className='mt-5 mb-10'>
          <Card type="revenue" data={data?.revenueDetails?.estimatedRevenueTrend} toggleDropdown={toggleDropdown} />
        </div>
        <div className='my-4'>
          <Heading heading='Reach & engagement' date={date} />
        </div>
        <div className='mt-5 mb-10'>
          <Card type="engagement" data={data?.reachAndEngagementDetails?.viewsTrend} toggleDropdown={toggleDropdown} />
        </div>
        <div className='my-4'>
          <Heading heading='Audience' date={date} />
        </div>
        <div className='mt-5 mb-10'>
          <Card type="audience" data={data?.audienceDetails?.viewsSubscriberVsNonSubscribersTrend} toggleDropdown={toggleDropdown} />
        </div>
      </div>
    </>
  )
}
