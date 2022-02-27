import React, { useState } from 'react'

export default function CardHeading({title, price, percent, views, subVal}) {
  const [type, setType] = useState(false);

  if(price) {
    setType('price')
  } else if(percent) {
    setType('percent')
  } else if(views) {
    setType('views')
  } else {
    // invalid prop
  }
  return (
    <>
      <div>
        <h4>{title}</h4>
        <h1>
          <h2>{type === 'price' ? `₹${price}` : null} </h2>
          <h2>{type === 'percent' ? `${percent} %` : null} </h2>
          <h2>{type === 'views' ? `${views} M` : null}</h2>
          <p>
            {subVal > 0 ? `+${subVal}%` : `-${subVal}%`}
            <span>i</span>
          </p>

        </h1>
      </div>
    </>
  )
}
