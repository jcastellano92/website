import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Pages'
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
