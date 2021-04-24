import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Single from './components/Single';



function App() {

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/single/:type/:id" component={Single} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
