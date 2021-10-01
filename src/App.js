import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SignIn from "./components/signUp/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </div>
    </Router>
  );
}

export default App;
