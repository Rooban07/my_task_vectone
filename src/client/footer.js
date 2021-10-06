import '../client/footer.css';
export default function Footer({ content }) {
  return (
    <div className='footer_wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <img src={content.footerLogo} />
          </div>
          <div className='col-sm-4'>
            <p>2020 UnifiedRing. All rights reserved</p>
          </div>
          <div className='col-sm-4 footer-block'>
            <p>
              {content.socialIcons.map((social, ind) => (
                <img key={ind} src={social.img} />
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
