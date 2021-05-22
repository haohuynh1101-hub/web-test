import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
