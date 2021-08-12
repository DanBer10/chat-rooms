import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./app/store";
import Chat from "./components/Chat";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </Provider>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
