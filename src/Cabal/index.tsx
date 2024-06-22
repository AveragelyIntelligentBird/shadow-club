import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CabalNavigation from "../Navigation";
import HomeFeed from "../Posts";
import CommunityFeed from "../Circles/CommunityFeed";
import Circles from "../Circles";
import Profile from "../Account/Profile";
import PostEditor from "../Posts/PostEditor";

export default function Cabal() {
    return (
        <div id="cabal-portal" className="flex-fill">
            <CabalNavigation/>
            <div className="flex-fill p-4">
                <Routes>
                    <Route path="/Profile" element={<Navigate to="u/Posts"/>}/>
                    <Route path="/Profile/:profileId" element={<Navigate to="Posts"/>}/>
                    <Route path="/Profile/:profileId/*" element={<Profile/>}/>
                    <Route path="/Feed/*" element={<HomeFeed/>}/>
                    <Route path="/Circles" element={<Circles/>}/>
                    <Route path="/Circles/:id/New" element={<PostEditor/>}/>
                    <Route path="/Circles/:id" element={<CommunityFeed/>}/>
                </Routes>
            </div>
        </div>
    );
}