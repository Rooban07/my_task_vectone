import React from 'react';
import '../client/benefit.css';

const BenefitComponent = ({ content }) => (
  <div className='benefit_blog'>
    <div class='container'>
      <div class='row'>
        <div className='col-sm-12'>
          <h2 className='heading_tag'>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        {content.data.map((detail, index) => (
          <div key={index} class='col-sm-4'>
            <div className='div_wrapper' style={{ background: index % 2 === 0 ? '#ECF3FF' : '#ECF1F7' }}>
              <img src={detail.img} style={{ width: '100%' }} />
              <h2>{detail.discription}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BenefitComponent;
