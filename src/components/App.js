import HomeScreen from "./home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from "./main_screen/MainScreen";
import AddEducation from "./main_screen/AddEducation";
function App() {
  return (
    <Router>
    <div className="container">
    <Switch>
    <Route path="/" exact component={HomeScreen}></Route>
    <Route path="/education" component={MainScreen}></Route>
    <Route path="/add" component={AddEducation}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
