import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateData = (date) => {
  console.log(date);
  const year = date.split('-')[0];
  let month = +date.split('-')[1];
  month = monthNames[month].substring(0, 3)
  const day = date.split('-')[2];
  return {year, month, day}
}

const getDay = day => {
  if(+day < 10) {
    day = day.substring(1,2)
  } 
  return day;
}

export default function Heading({ heading, date }) {
  console.log('Heading :: heading :: date ::', heading, date);

  let monthName, startDay, endDay, fullYr;
  if(date) {
    const {year, month, day} = dateData(date.startDate);
    monthName = month;
    startDay = day;
    const {year: year1, month: month1, day: day1} = dateData(date.endDate);
    endDay = day1;
    fullYr = year1;
    startDay = getDay(startDay);
    endDay = getDay(endDay);
  }

  return (
    <div className='py-3'>
      <p className='font-bold text-lg' style={{fontWeight: '600', fontSize: '14px', lineHeight: '21px'}}>{heading ? heading : <Skeleton />}</p>
      <p className='' style={{color: '#9A9A9A', fontWeight: '400', fontSize: '12px', lineHeight: '18px'}}>{date ? `${monthName} ${startDay} - ${endDay},${fullYr}` : <Skeleton />}</p>
    </div>
  )
}
