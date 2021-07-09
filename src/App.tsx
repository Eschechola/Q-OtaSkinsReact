import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './index.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes />
      <Footer />
    </div>
  );
}

export default App;
