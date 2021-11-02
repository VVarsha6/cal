import './App.css';
import First from './First';
import Second from './Second';
import Operator from './Operator';
import Result from './Result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
      <div className="App">
           <h1>vvs calc</h1>
          <Router>
           <Switch>
            <Route path="/" exact><First /></Route>
             <Route path="/Second"><Second /></Route>
             <Route path="/Operator"><Operator /></Route>
             <Route path="/Result"><Result /></Route>
           </Switch>
     </Router>   
    </div>
  );
}

export default App;
