import {useLocation, useNavigate, useParams} from "react-router";
import {Link, Route, Routes} from "react-router-dom";
import './index.css';
import NotFound from "../../NotFound";
import ProfileCard from "./ProfileCard";
import Affiliations from "./Affiliations";
import React, {useEffect, useState} from "react";
import * as client from "../client"
import {useSelector} from "react-redux";
import ProfileEditor from "./Editor";

export default function Profile() {
    const { profileId } = useParams();
    const navigate = useNavigate();
    const isThisUser = (profileId === "u");

    const {pathname} = useLocation();
    const currentUser = useSelector((state: any) => state.accountReducer)["currentUser"];
    const [profile, setProfile] = useState<any>(currentUser);
    const fetchOtherUserProfile = async () => {
        console.log("fetchOtherUserProfile");
        const account = await client.findUserProfileById(profileId);
        setProfile(account);
    };
    useEffect(() => {
        if (currentUser._id === profileId) {
            navigate("/Profile/u/Posts");
            return;
        }

        (!isThisUser) ? fetchOtherUserProfile() : setProfile(currentUser);
    }, [profile]);

    const tabs = ["Posts","Likes", "Replies", "Affiliations"];
    return (
        (!profile)
            ?
            <NotFound subject="User"/>
            :
            <div id="profile-page" className="d-flex">
                <ProfileCard profile={profile} fetchProfile={fetchOtherUserProfile}/>
                <Routes>
                    <Route path="Edit/*" element={<ProfileEditor/>}/>
                    <Route path="*" element={
                        <div id="profile-content" className="flex-grow-1">
                            <div id="profile-tabs" className="my-1 d-flex">
                                {
                                    tabs.map((tab) => (
                                        <Link to={`/Profile/${profileId}/${tab}`}
                                              className={`p-2 me-2 rounded-2 text-decoration-none wd-secondary-font
                                                wd-jet-border
                                              ${pathname.includes(tab)
                                                  ? "wd-green-yellow wd-bg-jet"
                                                  : "wd-camb-blue"
                                              }`}
                                        >
                                            {tab}
                                        </Link>
                                    ))
                                }
                            </div>
                            <div id="profile-tab-content" className="me-4 mt-3 rounded-2">
                                <Routes>
                                    <Route path="Posts" element={
                                        profile.posts.map(
                                            (post: any) => (
                                                <div className="wd-default-card wd-secondary-font mb-2 p-3">
                                                    Post {post}
                                                </div>
                                            )
                                        )
                                    }/>
                                    <Route path="Likes" element={
                                        profile.likes.map(
                                            (like: any) => (
                                                <div className="wd-default-card wd-secondary-font mb-2 p-3">
                                                    Liked post {like}
                                                </div>
                                            )
                                        )
                                    }/>
                                    <Route path="Replies" element={
                                        profile.replies.map(
                                            (reply: any) => (
                                                <div className="wd-default-card wd-secondary-font mb-2 p-3">
                                                    Reply {reply}
                                                </div>
                                            )
                                        )
                                    }/>
                                    <Route path="Affiliations" element={<Affiliations profile={profile}/>}/>
                                </Routes>
                            </div>
                        </div>
                    }/>
                </Routes>
            </div>
    );
};