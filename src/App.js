import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
