import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome"
import Login from "./Login"
import './App.css';
import Profile from "./Profile";
import ProfileEditor from "./Profile/Editor";
import HomeFeed from "./Posts";
import Circles from "./Circles";
import CommunityFeed from "./Circles/CommunityFeed";
import CabalNavigation from "./Navigation";

function App() {
    return (
        <HashRouter>
            <div className="h-100">
                <div className="bg-gyellow d-none d-md-block">
                    <CabalNavigation/>
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Welcome"/>}/>
                    <Route path="/Welcome" element={<Welcome/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Profile/:uid/" element={<Navigate to="Posts"/>}/>
                    <Route path="/Profile/:uid/Edit" element={<ProfileEditor/>}/>
                    <Route path="/Profile/:uid/Affiliations" element={<ProfileEditor/>}/>
                    <Route path="/Profile/:uid/Followers" element={<ProfileEditor/>}/>
                    <Route path="/Profile/:uid/Following" element={<ProfileEditor/>}/>
                    <Route path="/Profile/:uid/*" element={<Profile/>}/>
                    <Route path="/Feed" element={<HomeFeed/>}/>
                    <Route path="/Circles" element={<Circles/>}/>
                    <Route path="/Circles/:id/*" element={<CommunityFeed/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
