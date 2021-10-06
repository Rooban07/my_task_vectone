import Button from '@mui/material/Button';
import '../client/banner.css';
export default function Banner() {
  return (
    <>
      <div className='banner_wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'></div>
            <div className='col-sm-7'>
              <h1>Best VoIP Phone Systems for Small Businesses</h1>
              <Button variant='contained'>14-Day Free Trial</Button>
              <Button variant='outlined'>Plan Purchase</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
