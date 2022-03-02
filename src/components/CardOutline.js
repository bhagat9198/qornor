import React from 'react'

export default function CardOutline(props) {
  return (
    <>
      <div style={{ background: '#FFF', boxShadow: '-6px -6px 12px rgba(244, 244, 244, 0.43), 6px 6px 12px rgba(0, 0, 0, 0.1)' }} className="rounded-md" >
        {props.children}
      </div>
    </>
  )
}
