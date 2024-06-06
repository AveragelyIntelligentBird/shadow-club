import React from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Welcome from "./Welcome"
import Login from "./Login"
import './App.css';
import './index.css';
import Profile from "./Profile";
import ProfileEditor from "./Profile/Editor";
import HomeFeed from "./Posts";
import Circles from "./Circles";
import CommunityFeed from "./Circles/CommunityFeed";
import CabalNavigation from "./Navigation";
import PostEditor from './Posts/PostEditor';

function App() {
    return (
        <HashRouter>
            <div className="h-100 wd-bg-ebony">
                <div className="wd-bg-green-yellow d-none d-md-block">
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
                    <Route path="/:uid/Feed/" element={<Navigate to="Subscribed"/>}/>
                    <Route path="/:uid/Feed/*" element={<HomeFeed/>}/>
                    <Route path="/:uid/Circles" element={<Circles/>}/>
                    <Route path="/:uid/Circles/:id/New" element={<PostEditor/>}/>
                    <Route path="/:uid/Circles/:id/*" element={<CommunityFeed/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
