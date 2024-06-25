import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CabalNavigation from "../Navigation";
import HomeFeed from "../Posts";
import CommunityFeed from "../Circles/CommunityFeed";
import Circles from "../Circles";
import Profile from "../Account/Profile";
import PostEditor from "../Posts/PostEditor";
import {useSelector} from "react-redux";
import PostReplies from "../Posts/PostReplies";
import ReplyEditor from "../Replies/ReplyEditor";
import Search from "../Search";

export default function Cabal() {
    const currentUser =
        useSelector((state: any) => state.accountReducer)["currentUser"];
    return (
        <div id="cabal-portal" className="flex-fill">
            <CabalNavigation/>
            <div className="flex-fill p-4">
                <Routes>
                    <Route path="/Home" element={<Navigate to="/Feed"/>}/>
                    <Route path="/Profile" element={<Navigate to={(currentUser) ? "u" : "noid"}/>}/>
                    <Route path="/Profile/:profileId" element={<Navigate to="Posts"/>}/>
                    <Route path="/Profile/:profileId/*" element={<Profile/>}/>
                    <Route path="/Search/:searchScope/*" element={<Search/>}/>
                    <Route path="/Search/:searchScope/:searchPrompt" element={<Search/>}/>
                    <Route path="/Feed" element={<Navigate to={(currentUser) ? "Subscribed" : "All"}/>}/>
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