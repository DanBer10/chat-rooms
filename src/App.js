import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Header />
      <AppBody />
      <SideBar />
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact>
              {/* Chat*/}
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
