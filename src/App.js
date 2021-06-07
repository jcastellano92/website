import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Engineer, Designer } from './Pages'
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Engineer"><Engineer/></Route>
          <Route path="/Designer" component={Designer} />
          <Route path="/Wizard" component={Home} />
          <Route path="/Resume" component={Home} />
          <Route path="/Contact" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
