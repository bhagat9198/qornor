import React, { useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton'

export default function CardHeading({ type, value, subVal, info }) {
  const infoRef = useRef(null);

  let title = null;

  if (type === 'revenue') {
    title = `Estimated Revenue`;
  } else if (type === 'engagement') {
    title = `Views`;
  } else if (type === 'audience') {
    title = `Subscriber views vs total views`;
  } else {
    // invalid prop
    title = null
  }

  const typeUI = () => {
    // console.log('CardHeading :: value :: ', value);
    if (value) {
      return value;
    } else {
      return <Skeleton style={{ width: '50px' }} />;
    }
  }

  const subValUI = () => {
    // console.log('CardHeading :: subVal :: ', subVal, type);
    if (!subVal) {
      return <Skeleton style={{ width: '50px' }} />;
    } else if (subVal > 0) {
      return <p style={{ color: '#11AC6A', fontSize: '15px' }}> +${Math.abs(subVal)}% </p>;
    } else if (subVal < 0) {
      return <p style={{ color: 'salmon', fontSize: '15px' }} >-${Math.abs(subVal)}%</p>
    } else if (subVal === 0) {
      return <p style={{ color: 'gray', fontSize: '15px' }} >${subVal}% </p>
    } else {
      return <Skeleton style={{ width: '50px' }} />;
    }
  }

  const toggleInfoHandler = () => {
    const allClasses = infoRef.current.className;
    if (allClasses.includes('hidden')) {
      infoRef.current.classList.remove('hidden');
    } else {
      infoRef.current.classList.add('hidden');
    }
  }

  return (
    <>
      <div className='mb-7 ' >
        <h4 style={{ height: '20px', fontWeight: 600, fontSize: '15px', lineHeight: '15px' }}>{title || <Skeleton style={{ width: '40%' }} />}</h4>
        <div style={{ height: '15px', fontWeight: 600, fontSize: '30px', lineHeight: '36px' }} >
          {type === 'revenue' ? <h1 className='flex'> ₹{typeUI()}<span className='pl-1' style={{ fontWeight: 500, fontSize: '18px', }}>lac</span>  </h1> : null}
          {type === 'engagement' ? <h1 className='flex'> {typeUI()} <span className='pl-1' style={{ fontWeight: 500, fontSize: '18px', }}>M</span> </h1> : null}
          {type === 'audience' ? <h1 className='flex'>{typeUI()} <span className='pl-1' style={{ fontWeight: 500, fontSize: '18px', }}>%</span></h1> : null}
          {type === undefined ? <Skeleton style={{ width: '20%' }} /> : null}
        </div>
        <div className='flex mt-8 absolute' style={{ fontWeight: 500, fontSize: '10px', lineHeight: "12px" }}>
          <span className='pr-2' > {subValUI()} </span>
          <span className='rotate-180 relative bottom-2 text-gray-400' onClick={toggleInfoHandler}>
            <i className="fa fa-exclamation-circle " aria-hidden="true" ></i>
          </span>
          <div ref={infoRef} className='flex items-center justify-center relative top-4 hidden px-2' style={{ background: '#EBFFF7', borderRadius: 3, height: '21px' }}>
            <p style={{ fontWeight: 400, fontSize: '10px', }}>{info || <Skeleton />}</p>
          </div>
        </div>
      </div>
    </>
  )
}
