import { useLocation, useNavigate, useParams } from "react-router";
import { Link, Route, Routes } from "react-router-dom";
import "../index.css";
import NotFound from "../../NotFound";
import ProfileCard from "./ProfileCard";
import Affiliations from "./Affiliations";
import React, { useEffect, useState } from "react";
import * as client from "../client";
import { useSelector } from "react-redux";
import ProfileEditor from "./Editor";
import Post from "../../Posts/Post";

export default function Profile() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const isThisUser = profileId === "u";

  const { pathname } = useLocation();
  const currentUser = useSelector((state: any) => state.accountReducer)[
    "currentUser"
  ];
  const [profile, setProfile] = useState<any>(currentUser);

  const fetchProfile = async () => {
    try {
      const account = await client.findUserProfileById(
        !isThisUser ? profileId : currentUser._id
      );
      setProfile(account);
    } catch (err: any) {
      setProfile(null);
    }
  };
  useEffect(() => {
    if (currentUser && currentUser._id === profileId) {
      navigate("/Profile/u/Posts");
      return;
    }

    fetchProfile();
  }, []);

  const tabs = ["Posts", "Likes", "Affiliations"];
  return !profile ? (
      <NotFound subject="User"/>
  ) : (
      <div id="profile-page" className="d-lg-flex">
        <ProfileCard profile={profile} fetchProfile={fetchProfile}/>
        <div className="mt-4 mt-lg-0 flex-fill">
          <Routes>
          <Route
              path="Edit/*"
              element={<ProfileEditor profile={profile} setProfile={setProfile}/>}
          />
          <Route
              path="*"
              element={
                <div id="profile-content" className="flex-grow-1">
                  <div id="profile-tabs" className="my-1 d-flex">
                    {tabs.map((tab) => (
                        <Link
                            to={`/Profile/${profileId}/${tab}`}
                            className={`p-2 me-2 rounded-2 text-decoration-none wd-secondary-font
                                                wd-jet-border
                                              ${
                                pathname.includes(tab)
                                    ? "wd-green-yellow wd-bg-jet"
                                    : "wd-camb-blue"
                            }`}
                        >
                          {tab}
                        </Link>
                    ))}
                  </div>
                  <div id="profile-tab-content" className="me-lg-4 mt-3 rounded-2">
                    <Routes>
                      <Route
                          path="Posts"
                          element={
                            (profile.posts.length === 0)
                                ?
                                <div className="d-flex wd-default-card p-4 justify-content-center">
                                  User haven't posted anything yet.
                                </div>
                                :
                                profile.posts.map((postId: any) => (
                                    <Post id={postId}></Post>
                                ))
                          }
                      />
                      <Route
                          path="Likes"
                          element={
                            (profile.likes.length === 0)
                                ?
                                <div className="d-flex wd-default-card p-4 justify-content-center">
                                  User haven't liked anything yet.
                                </div>
                                :
                                profile.likes.map((postId: any) => (
                                    <Post id={postId}></Post>
                                ))

                          }
                      />
                      <Route
                          path="Affiliations"
                          element={<Affiliations profile={profile}/>}
                      />
                    </Routes>
                  </div>
                </div>
              }
          />
        </Routes>
        </div>

      </div>
  );
}
