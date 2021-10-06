import Button from '@mui/material/Button';
import '../client/banner.css';
export default function Banner({ content }) {
  return (
    <div className='banner_wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-7'>
            <h1>{content.title}</h1>
            {content.buttons.map((data, ind) => (
              <Button key={ind} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
