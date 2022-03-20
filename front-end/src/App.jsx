import React, { useEffect, useReducer } from "react";
import { UserContext } from "context/UserContext";
import authReducer from "components/auth/authReducer";
import AppRouter from "components/routers/AppRouter";

const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  };

  /* const [state, dispatch] = useReducer(reducer, initialState, init) */
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <main id="main-container">
      <UserContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </UserContext.Provider>
    </main>
  );
};

export default App;
