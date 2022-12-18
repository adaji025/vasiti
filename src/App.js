import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SecondHeader from './components/Header/SecondHeader';
import Banner from './components/Home/Banner/Banner';
import Clients from './components/Home/ClientsCard/Clients/Clients';
import Experience from './components/Home/Experience/Experience';

function App() {
  return (
    <div className="App">
     <Header />
     <SecondHeader />
     <Banner />
     <Experience />
     <Clients />
     <Footer />
    </div>
  );
}

export default App;
