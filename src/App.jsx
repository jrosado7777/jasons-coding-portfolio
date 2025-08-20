import './App.css';
import Profile from './components/Profile.jsx';
import ProjectLinks from './components/ProjectLinks.jsx';
import Credentials from './components/Credentials.jsx';
import FullResume from './components/FullResume.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <div className="App">
      <div className="hero-background">
        <Profile />
      </div>
      <div className="content">
        <AboutMe />
        <FullResume />
        <Credentials />
        <ProjectLinks />
      </div>
    </div>
  );
}

export default App;
