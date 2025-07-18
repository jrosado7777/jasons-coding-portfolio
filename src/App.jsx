import './App.css';
import Profile from './components/Profile.jsx';
import ProjectLinks from './components/ProjectLinks.jsx';
import Credentials from './components/Credentials.jsx';
import FullResume from './components/FullResume.jsx';

function App() {
  return (
    <div className="App">
      <div className="hero-background">
        <Profile />
      </div>
      <div className="content">
        <ProjectLinks />
        <Credentials />
        <FullResume />
      </div>
    </div>
  );
}

export default App;
