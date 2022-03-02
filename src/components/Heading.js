import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { dateData, getDay } from '../utils/dateUtils';



export default function Heading({ heading, date }) {
  // console.log('Heading :: heading :: date ::', heading, date);

  let monthName, startDay, endDay, fullYr;
  if (date) {
    const { year, month, day } = dateData(date.startDate);
    monthName = month;
    startDay = day;
    const { year: year1, month: month1, day: day1 } = dateData(date.endDate);
    endDay = day1;
    fullYr = year1;
    startDay = getDay(startDay);
    endDay = getDay(endDay);
  }

  return (
    <div className='py-3'>
      <p className='font-bold text-lg' style={{ fontWeight: '600', fontSize: '24px', lineHeight: '26px' }}>{heading ? heading : <Skeleton />}</p>
      <p className='' style={{ color: '#9A9A9A', fontWeight: '400', fontSize: '16px', lineHeight: '18px' }}>{date ? `${monthName} ${startDay} - ${endDay},${fullYr}` : <Skeleton />}</p>
    </div>
  )
}
