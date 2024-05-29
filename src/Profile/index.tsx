import * as db from "../Database";
import './index.css';
import { useParams } from "react-router";
import {GiWarlockEye} from "react-icons/gi";
import { LiaCogSolid } from "react-icons/lia";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import { useLocation } from "react-router";
import Welcome from "../Welcome";
import Login from "../Login";
import ProfileEditor from "./Editor";
import React from "react";

export default function Profile() {
    const { uid } = useParams();
    const user =
        db.users.find((user) => user.uid === uid);
    const tabs = ["Posts", "Replies"];
    const {pathname} = useLocation();
    return (
        <div style={{height: "100vh"}}
             className="wd-bg-ebony">
            <div className="fs-2 p-2 px-4 mb-3 mx-3 rounded-2 wd-green-yellow wd-primary-font  wd-bg-jet ">
                <GiWarlockEye className="fs-1 mb-2"/> Cabal
            </div>
            {
                user &&
                <div className="d-flex">
                    <div className="col-4 wd-bg-jet text-end mx-4 p-5 rounded-2">
                        <div>
                            <Link to="Edit" className="float-start">
                                <LiaCogSolid className="fs-1 mb-4 wd-light-green wd-color-on-hover"/>
                            </Link>
                            <div className="fs-3 wd-green-yellow wd-primary-font px-1">
                                {user.username}
                            </div>
                        </div>
                        <img src={user.profileData.avatar} className="wd-profile-pic" alt="avatar pfp"/>
                        <div className="wd-green-yellow wd-secondary-font mt-2">
                            {user.profileData.bio} <br/><br/>
                            {user.profileData.MBTI}, {user.profileData.starSign}
                        </div>
                        <div className="wd-hor-divider"></div>
                        <div className="wd-green-yellow wd-secondary-font"
                             style={{}}>
                            <div className="float-start">Joined {user.profileData.memberSince}</div>
                            <div className="float-end">
                                <Link to="Affiliations" className="wd-camb-blue">
                                    Affiliations
                                </Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="Following" className="wd-camb-blue">
                                    Following
                                </Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to="Followers" className="wd-camb-blue">
                                    Followers
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="my-1">
                            {
                                tabs.map((tab) => (
                                    <Link to={tab}
                                          className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font
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
                        <div className="me-4 mt-3 rounded-2">
                            <Routes>
                                <Route path="Posts" element={
                                    user.profileData.posts.map(
                                        (post) => (
                                            <div className="wd-bg-jet wd-green-yellow rounded-2
                                                            wd-secondary-font mb-2 p-3">
                                                Post {post}
                                            </div>
                                        )
                                    )
                                }/>
                                <Route path="Replies" element={
                                    user.profileData.replies.map(
                                        (reply) => (
                                            <div className="wd-bg-jet wd-green-yellow rounded-2
                                                            wd-secondary-font mb-2 p-3">
                                                Reply {reply}
                                            </div>
                                        )
                                    )
                                }/>
                            </Routes>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

}