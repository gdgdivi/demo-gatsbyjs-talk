import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='container header-container'>
      <h1 className='title'>
        <Link to='/'>{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

export default Header
