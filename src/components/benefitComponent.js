import React from 'react';
import '../client/benefit.css';

class BenefitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benefit_box: this.props.benefitContent || [],
    };
  }
  render() {
    const { benefit_box } = this.state;
    return (
      <div className='benefit_blog'>
        <div class='container'>
          <div class='row'>
            <div className='col-sm-12'>
              <h2 className='heading_tag'>Unlimited business benefits with UnifiedRing</h2>
              <p>Manage virtual teams with maximum efficiency.</p>
            </div>
            {benefit_box.map((detail, index) => {
              return (
                <div class='col-sm-4'>
                  <div className='div_wrapper' style={{ background: index === 0 ? '#ECF3FF' : index === 1 ? '#EEF5F6' : '#ECF1F7' }}>
                    <img src={detail.img} style={{ width: '100%' }} />
                    <h2>{detail.discription}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BenefitComponent;
