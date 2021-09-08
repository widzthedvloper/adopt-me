/* eslint-disable import/namespace */
/* eslint-disable import/named */
import React, { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
            <header>
              <Link to="/">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
