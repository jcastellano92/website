import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Engineer, Designer } from './Pages'
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Engineer" component={Engineer} />
          <Route exact path="/Designer" component={Designer} />
          <Route exact path="/Wizard" component={Home} />
          <Route exact path="/Resume" component={Home} />
          <Route exact path="/Contact" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
