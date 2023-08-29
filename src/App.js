import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:id" component={NewsletterDetails} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}


export default App;
