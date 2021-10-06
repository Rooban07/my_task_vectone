import Banner from './client/banner';
import Benefits from './client/benefitComponent';
import Footer from './client/footer';
import Header from './client/header';
import data from './config';

function App() {
  return (
    <div>
      <Header content={data.header} />
      <Banner content={data.banner} />
      <Benefits content={data.benefits} />
      <Footer content={data.footer} />
    </div>
  );
}

export default App;
