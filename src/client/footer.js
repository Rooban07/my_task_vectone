import '../client/footer.css';
import Facebook from '../client/uploads/facebook.svg';
import Instagram from '../client/uploads/instagram.svg';
import Linkedin from '../client/uploads/linkedin.svg';
import FooterLogo from '../client/uploads/logo.svg';
import Twiter from '../client/uploads/twitter.svg';
import Youtube from '../client/uploads/youtube.svg';

const socialMedia = [{ img: Facebook }, { img: Twiter }, { img: Youtube }, { img: Instagram }, { img: Linkedin }];
export default function Footer() {
  return (
    <div className='footer_wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <img src={FooterLogo} />
          </div>
          <div className='col-sm-4'>
            <p>2020 UnifiedRing. All rights reserved</p>
          </div>
          <div className='col-sm-4 footer-block'>
            <p>
              {socialMedia.map(social => {
                return <img src={social.img} />;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
