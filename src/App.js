import './App.css';
import AboutPage from './components/Layout/AboutPage';
import LandingPage from './components/Layout/LandingPage';
import RoutesContainer from './routes/RoutesContainer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutPage />
    </div>
  );
}

export default App;
