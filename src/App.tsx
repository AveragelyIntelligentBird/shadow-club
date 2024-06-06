import React from 'react';

import store from "./store";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome"
import Login from "./Login"
import Cabal from "./Cabal"
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="Welcome"/>}/>
                        <Route path="/Welcome" element={<Welcome/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/:uid/*" element={<Cabal/>}/>
                    </Routes>
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;
