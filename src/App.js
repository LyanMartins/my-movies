import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './view/Home';
import { About } from './view/About';
import { MovieDetail } from './view/MovieDetail';


function App() {

  return (
    <div className="App">
     

      <Router>
        <Header />
        <Switch>

          <Route path="/sobre">
            <About />
          </Route>
          
          <Route path="/movie/:id">
            <MovieDetail />
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
