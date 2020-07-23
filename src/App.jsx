import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routers";
import { PrivateRoute } from "./routers/private";
import { PublicRoute } from "./routers/public";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#469a10",
        dark: "#212121",
        contrastText: "#e8f5e9",
      },
    },
  });

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            {routes.map((route, i) =>
              route.routes ? (
                <PrivateRoute key={i} {...route} />
              ) : (
                <PublicRoute key={i} {...route} />
              )
            )}
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
