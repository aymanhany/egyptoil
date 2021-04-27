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
import Archive from './components/Archive';



function App() {

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/single/:type/:id" component={Single} />
          <Route path="/archive/:type" component={Archive} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
