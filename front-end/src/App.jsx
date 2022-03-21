import React, { useEffect, useReducer } from 'react';
import authReducer from 'components/auth/authReducer';
import AppRouter from 'components/routers/AppRouter';
import themeReducer, { themeInitialState } from 'components/theme/themeReducer';
import { ThemeContext } from 'contexts/ThemeContext';
import { UserContext } from 'contexts/UserContext';

const App = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    };

    /* const [state, dispatch] = useReducer(reducer, initialState, init) */
    const [user, dispatch] = useReducer(authReducer, {}, init);

    const [theme, dispatchTheme] = useReducer(themeReducer, themeInitialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {}, [theme]);

    return (
        <main id="main-container">
            <ThemeContext.Provider value={{ theme, dispatchTheme }}>
                <UserContext.Provider value={{ user, dispatch }}>
                    <AppRouter />
                </UserContext.Provider>
            </ThemeContext.Provider>
        </main>
    );
};

export default App;
