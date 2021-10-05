import React from 'react';
import img1 from '../client/uploads/img1.png';
import img2 from '../client/uploads/img2.png';
import img3 from '../client/uploads/img3.png';
import BenefitComponent from '../components/benefitComponent';

let benefit_details = [
  {
    img: img1,
    discription: 'No installation, no activation fee, and no set-up fee.',
  },
  {
    img: img2,
    discription: 'Get auto-receptionist to handle calls with customized and informative IVRs.',
  },
  {
    img: img3,
    discription: 'Chat and collaborate efficiently with your remote teams.',
  },
];

class Benefits extends React.Component {
  render() {
    this.state = {
      benefit: benefit_details,
    };
    const { benefit } = this.state;
    return (
      <>
        <BenefitComponent benefitContent={benefit} />
      </>
    );
  }
}

export default Benefits;
