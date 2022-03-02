import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'

export default function CardHeading({title, type, value, subVal}) {
  // const [type, setType] = useState(false);

  // if(titleType === 'revenue') {
  //   setType('price')
  // } else if(titleType === 'engagement') {
  //   setType('percent')
  // } else if(titleType === 'audience') {
  //   setType('views')
  // } else {
  //   // invalid prop
  // }

  const typeUI = () => {
    if(value) {
      return value;
    } else {
      return <Skeleton style={{width: '20%'}} />;
    }
  }

  const subValUI = () => {
    if(!subVal) {
      return <Skeleton style={{ width: '20%'}}  />;
    } else if(subVal > 0) {
      return  <p style={{color: '#11AC6A', lineHeight: '12px', fontSize: '10px', fontWeight: 500}}> +${subVal}% </p>;
    } else if (subVal < 0) {
      return  <p style={{color: 'salmon', lineHeight: '12px', fontSize: '10px', fontWeight: 500}} >-${subVal}%</p>
    } else if( subVal === 0) {
      return  <p style={{color: 'gray', lineHeight: '12px', fontSize: '10px', fontWeight: 500}} >${subVal}% </p>
    } else {
      return null;
    }
  }

  return (
    <>
      <div>
        <h4 style={{height: '15px', fontWeight: 600, fontSize: '10px', lineHeight: '15px' }}>{title || <Skeleton  style={{ width: '40%'}}  />}</h4>
        <div style={{height: '15px', fontWeight: 600, fontSize: '24px', lineHeight: '36px' }} >
          {type === 'revenue' ? <h1> ₹${typeUI()}<span style={{fontWeight: 500, fontSize: '14px', lineHeight: '21px'}}>lac</span>  </h1> : null}
          {type === 'engagement' ? <h1> ${typeUI()} <span>M</span> </h1> : null}
          {type === 'audience' ? <h1>${typeUI()} <span>%</span></h1> : null} 
        </div>
        <div className='flex'>
          {subValUI()}
          <span className='rotate-180 '>
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </>
  )
}
