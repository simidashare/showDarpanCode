import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/index";

import SideProvider from "./components/SideProvider";

function App() {
  return (
    <SideProvider>
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
        </Switch>
      </Router>
    </SideProvider>
  );
}

export default App;
