import HomeScreen from "./home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from "./main_screen/MainScreen";
function App() {
  return (
    <Router>
    <div className="container">
    <Switch>
    <Route path="/" exact component={HomeScreen}></Route>
    <Route path="/education" component={MainScreen}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
