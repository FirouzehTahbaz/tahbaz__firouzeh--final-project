import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import component
import Navbar from "./components/navbar";
import Logo from "./components/logo";
import Footer from "./components/footer";

// import pages
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo /> 
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
