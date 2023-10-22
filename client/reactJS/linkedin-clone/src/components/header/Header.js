import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Header = () => {
  return (
    <div className='header'>
      <h1>This is the header</h1>

      {/* LEFT HEADER */}
      <div className="header_left">
        <LinkedInIcon style={{ color: 'blue' }} />
        {/* search */}
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* RIGHT HEADER */}
      <div className="header_right">

      </div>
    </div>
  )
}

export default Header
