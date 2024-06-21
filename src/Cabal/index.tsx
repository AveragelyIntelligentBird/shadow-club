import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CabalNavigation from "../Navigation";
import HomeFeed from "../Posts";
import CommunityFeed from "../Circles/CommunityFeed";
import Circles from "../Circles";
import ProfileEditor from "../Profile/Editor";
import Profile from "../Profile";
import PostEditor from "../Posts/PostEditor";
import PostReplies from "../Posts/PostReplies";
import ReplyEditor from "../Replies/ReplyEditor";

export default function Cabal() {
    return (
        <div id="cabal-portal" className="flex-fill">
            <CabalNavigation/>
            <div className="flex-fill p-4">
                <Routes>
                    <Route path="/Profile/:profileId/" element={<Navigate to="Posts"/>}/>
                    <Route path="/Profile/:profileId/Edit/*" element={<ProfileEditor/>}/>
                    <Route path="/Profile/:profileId/*" element={<Profile/>}/>
                    <Route path="/Feed/*" element={<HomeFeed/>}/>
                    <Route path="/Circles" element={<Circles/>}/>
                    <Route path="/Post/:pid" element={<PostReplies/>}/>
                    <Route path="/Post/:pid/New" element={<ReplyEditor/>}/>
                    <Route path="/Circles/:id/New" element={<PostEditor/>}/>
                    <Route path="/Circles/:id" element={<CommunityFeed/>}/>
                </Routes>
            </div>
        </div>
    );
}