import React, { useContext } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import { LoginProvider } from "./Components/Context/LoginState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/theme.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/:page?"
                render={(props) => <Nav {...props} />}
              />
            </Switch>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </LoginProvider>
  );
}

export default App;
