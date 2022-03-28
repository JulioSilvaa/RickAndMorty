import React from "react";

import { GlobalState } from "./Global/GlobalState";
import { Home } from "./Pages/Home/Home";
import GlobalStyle from "./GlobalStyle";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="ContainerApp">
      <GlobalStyle />
      <GlobalState>
        <Router>
          <Home />
        </Router>
      </GlobalState>
    </div>
  );
}

export default App;
