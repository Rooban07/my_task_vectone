import Facebook from './client/uploads/facebook.svg';
import img1 from './client/uploads/img1.png';
import img2 from './client/uploads/img2.png';
import img3 from './client/uploads/img3.png';
import Instagram from './client/uploads/instagram.svg';
import Linkedin from './client/uploads/linkedin.svg';
import Logo from './client/uploads/logo.svg';
import Twiter from './client/uploads/twitter.svg';
import Youtube from './client/uploads/youtube.svg';
const data = {
  header: {
    logo: Logo,
    phone: '02034440000',
  },
  banner: {
    title: 'Best VoIP Phone Systems for Small Businesses',
    buttons: [
      { variant: 'contained', children: '14-Day Free Trial' },
      { variant: 'outlined', children: 'Plan Purchase' },
    ],
  },
  benefits: {
    title: 'Unlimited business benefits with UnifiedRing',
    description: 'Manage virtual teams with maximum efficiency.',
    data: [
      { img: img1, discription: 'No installation, no activation fee, and no set-up fee.' },
      { img: img2, discription: 'Get auto-receptionist to handle calls with customized and informative IVRs.' },
      { img: img3, discription: 'Chat and collaborate efficiently with your remote teams.' },
    ],
  },
  footer: {
    footerLogo: Logo,
    socialIcons: [{ img: Facebook }, { img: Twiter }, { img: Youtube }, { img: Instagram }, { img: Linkedin }],
  },
};

export default data;
