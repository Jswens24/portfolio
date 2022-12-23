import './App.css';
import AboutPage from './components/Layout/AboutPage';
import LandingPage from './components/Layout/LandingPage';
import Navbar from './components/Layout/Navbar';
import ProjectsPage from './components/Layout/ProjectsPage';
import RoutesContainer from './routes/RoutesContainer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
