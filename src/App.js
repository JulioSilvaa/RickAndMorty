import React from "react";

import { GlobalState } from "./Global/GlobalState";
import { Home } from "./Pages/Home";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="ContainerApp">
      <GlobalStyle />
      <GlobalState>
        <Home />
      </GlobalState>
    </div>
  );
}

export default App;
