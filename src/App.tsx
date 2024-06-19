import React from 'react';

import store from "./store";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome"
import Login from "./Login"
import Cabal from "./Cabal"
import './App.css';
import HomeFeed from './Posts';
import Circles from './Circles';
import PostEditor from './Posts/PostEditor';
import CommunityFeed from './Circles/CommunityFeed';
import Session from './Login/Session';

function App() {
    return (
        <Provider store={store}>
            <Session>
                <HashRouter>
                    <div className="main-container d-flex">
                        <Routes>
                            <Route path="/" element={<Navigate to="Welcome"/>}/>
                            <Route path="/Welcome" element={<Welcome/>}/>
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/Cabal" element={<Cabal/>}/>
                            <Route path="/:uid/*" element={<Cabal/>}/>
                        </Routes>
                    </div>
                </HashRouter>
            </Session>
        </Provider>
    );
}

export default App;
