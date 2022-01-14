
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Content, Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header';
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about-me">
            <AboutMe/>
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
