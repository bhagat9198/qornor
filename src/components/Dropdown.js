import React from 'react'
import PropTypes from 'prop-types'

export default function Dropdown({ toggleDropdown, dropdownHandler }) {

  const selectHandler = value => {
    console.log('DropDown :: selectHandler :: value ::', value);
    dropdownHandler({ value })
  }

  return (
    <>
      <div className='relative'>
        <button id="dropdownButton" data-dropdown-toggle="dropdown" type="button" className='flex border-2 rounded-2xl py-1 px-2' onClick={dropdownHandler} style={{ fontWeight: '500', fontSize: '10.9px', lineHeight: '16.35px' }} >{toggleDropdown.value} <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

        <div id="dropdown" className={`${toggleDropdown.status} absolute z-10 w-28 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <a id='op1' href="#" onClick={e => selectHandler('2021-01-01 :: 2021-01-31')} className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Jan 1 - 31,2021</a>
            </li>
            <li>
              <a id='op2' href="#" onClick={e => selectHandler('2021-02-01 :: 2021-02-07')} className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Feb 1 - 07,2021</a>
            </li>
            <li>
              <a id='op3' href="#" onClick={e => selectHandler('2021-02-10 :: 2021-02-15')} className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Feb 10 - 15,2021</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

Dropdown.propTypes = {
  toggleDropdown: PropTypes.object,
  dropdownHandler: PropTypes.func,
}