import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./Dashboard";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import NavBar from "./NavBar";
import { UserContext } from "./UserContext";
import Store from "./Store";

function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact={true} Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/store" Component={Store} />
            <Route path="*" Component={NoMatchPage} />
          </Routes>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
