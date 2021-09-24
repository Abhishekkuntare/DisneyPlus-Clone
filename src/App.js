import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import SignUp from "./components/SignUp";
import Trailer from "./components/Trailer";
import Payment from "./components/Payment";
import Successfully from "./components/Successfully";
import Disney from "./components/Disney";
import Pixar from "./components/Pixar";
import Marvels from "./components/Marvels";
import StarsWars from "./components/StarsWars";
import National from "./components/National";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/home">
            <Home />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
            <Header />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/trailer">
            <Trailer />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/successfully">
            <Successfully />
          </Route>
          <Route exact path="/disney">
            <Disney />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/pixar">
            <Pixar />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/marvle">
            <Marvels />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/starwars">
            <StarsWars />
            <Header />
            <Footer />
          </Route>
          <Route exact path="/national">
            <National />
            <Header />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
