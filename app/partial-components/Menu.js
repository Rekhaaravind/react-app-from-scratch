import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <ul style={{userSelect: 'none'}}>
      <li className='link'>
        <NavLink className='text_link' tabIndex='2' exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink className='text_link' tabIndex='3' activeClassName='active' to='/events'>Events</NavLink>
      </li>
      <li className='link'>
        <a className='text_link' tabIndex='4' href='https://github.com/httpJunkie/react-app-from-scratch'>
          Source Code <i className='k-icon k-i-hyperlink-open-sm'></i>
        </a>
      </li>
      <li className='menu'><span className='k-icon k-i-menu'></span></li>
    </ul>
  )
}

export default Menu