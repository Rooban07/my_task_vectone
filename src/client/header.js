import React from 'react';
import '../client/header.css';
import CallIcon from './uploads/call_icon.svg';

function Header({ content }) {
  return (
    <div className='header_wrapper'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-4'>
            <img src={content.logo} />
          </div>
          <div class='col-sm-4'></div>
          <div class='col-sm-4' style={{ textAlign: 'end' }}>
            <p>
              <img src={CallIcon} /> {content.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
