// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Search from "./components/Search/Search";
import Favorite from "./components/Favorite/Favorite";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/photos" component={Photos} />
      <Route path="/search" component={Search} />
      <Route path="/favorite" component={Favorite} />
    </Router>
  );
}

export default App;
