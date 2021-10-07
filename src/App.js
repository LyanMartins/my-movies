import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './view/Home';
import { About } from './view/About';


function App() {

  return (
    <div className="App">
     

      <Router>
        <Header />
        <Switch>
          <Route path="/sobre">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
