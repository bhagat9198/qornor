import React from 'react';
import Skeleton from 'react-loading-skeleton'
import { Rings } from 'react-loader-spinner';

export default function Header({ data }) {
  // console.log('Header :: data ::', data);
  return (
    <>
      <div className='absolute ' style={{width: '100%'}}>
        <div className='flex items-center pl-5 py-10 bg-black' >
          <div className='text-white'>
            <i className="fa fa-arrow-left text-xl " aria-hidden="true"  ></i>
          </div>
          <div className='text-lg text-white flex items-center justify-center' style={{ width: '100%' }}>
            <p style={{ fontWeight: 600, fontSize: '24px', lineHeight: '22.5px' }}>Youtube Stats</p>
            <i class="fa-brands fa-youtube text-red-600 ml-2 text-3xl"></i>
          </div>
        </div>
        <div className='flex justify-center items-center text-white font-bold bg-black z-100'  >
          <div className='rounded-full text-xl mr-5' style={{width: '51.8px', height: '51.8px'}} >
            {data?.thumbnailUrl ?
              <img src={data?.thumbnailUrl} alt="youtube channel logo" style={{width: '100%', height: '100%', objectFit: 'contain'}}  /> :
              <Rings ariaLabel="loading-indicator" />
            }
          </div>
          <div>
            <p className='text-white' style={{ fontWeight: 600, fontSize: '20px', lineHeight: '30px' }}> {data?.channelName ? data?.channelName : <Skeleton />} </p>
            <p className='flex text-white' style={{ fontWeight: 500, fontSize: '14px', lineHeight: '12.8px' }}>
               {data?.subscribersCount ? data.subscribersCount : <Skeleton className='mr-1' style={{ width: '20px' }} />}<span className='pl-1'>M</span>  
               <span className='flex justify-center items-center px-1 mx-1 '>
                 <span className='bg-white rounded-full' style={{width: '3px', height: '3px'}}></span>
                </span> 
               {data?.videoCount ? data.videoCount : <Skeleton className='mr-1' style={{ width: '20px' }} />} videos</p>
          </div>
        </div>
        <div className='bg-black pb-32 relative bottom-16 -z-10' style={{borderRadius: '50%'}}></div>
      </div>
      <div className='pt-60' ></div>
    </>
  )
}
