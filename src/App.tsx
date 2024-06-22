import React from 'react';

import store from "./store";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome"
import SignIn from "./Account"
import SignUp from "./Account/SignUp"
import Cabal from "./Cabal"
import './App.css';
import Session from './Account/Session';

function App() {
    return (
        <Provider store={store}>
            <Session>
                <HashRouter>
                    <div className="main-container d-flex">
                        <Routes>
                            <Route path="/" element={<Navigate to="Welcome"/>}/>
                            <Route path="/Welcome" element={<Welcome/>}/>
                            <Route path="/SignIn" element={<SignIn/>}/>
                            <Route path="/SignUp" element={<SignUp/>}/>
                            <Route path="/*" element={<Cabal/>}/>
                        </Routes>
                    </div>
                </HashRouter>
            </Session>
        </Provider>
    );
}

export default App;
