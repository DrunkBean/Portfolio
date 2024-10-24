import './App.css';
import NavBar from './Components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home />
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
