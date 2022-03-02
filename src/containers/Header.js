import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Rings } from 'react-loader-spinner';

export default function Header({data}) {
  return (
    <div className='pt-4 pl-2 bg-black' style={{linearGradient: '(359.73deg, #000000 0.25%, rgba(0, 0, 0, 0) 99.77%)'}}>
      <div className='flex align-middle '>
          <div className='text-white'>
          <i className="fa fa-arrow-left text-xl " aria-hidden="true"  ></i>
          </div>
        <div className='text-lg text-white flex align-middle justify-center' style={{width: '100%'}}>Youtube Stats</div>
      </div>
      <div className='flex justify-center text-white font-bold' >
        <div className='rounded-3xl text-xl' >
          { data?.thumbnailUrl ? 
            <img src={data?.thumbnailUrl} alt="youtube channel logo"  /> :
            <Rings ariaLabel="loading-indicator" />
          }
        </div>
        <div>
          <p> {data?.channelName ? data?.channelName : <Skeleton /> } </p>
          <p className='flex'> {data?.subscribersCount ? data.subscribersCount : <Skeleton /> }M <span>.</span> {data?.videoCount ? data.videoCount : <Skeleton />} videos</p>
        </div>
      </div>
    </div>
  )
}
