import React from 'react';
import '../client/header.css';
import CallIcon from './uploads/call_icon.svg';
import Logo from './uploads/logo.svg';

function Header() {
  return (
    <div className='header_wrapper'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-4'>
            <img src={Logo} />
          </div>
          <div class='col-sm-4'></div>
          <div class='col-sm-4' style={{ textAlign: 'end' }}>
            <p>
              <img src={CallIcon} /> 02034440000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
