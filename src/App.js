import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Hockey from "./Pages/Hockey";
import Summer from "./Pages/Summer";
import Other from "./Pages/Other";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <h1>Kids of Canada</h1>
          <a href="/">Home</a>
          <a href="/Hockey">Hockey</a>
          <a href="/Summer">Summer</a>
          <a href="/Other">Other</a>
        </nav> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Hockey">
            <Hockey />
          </Route>
          <Route path="/Summer">
            <Summer />
          </Route>
          <Route path="/Other">
            <Other />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
