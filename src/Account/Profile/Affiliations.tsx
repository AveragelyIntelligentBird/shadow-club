import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as circleClient from "../../Circles/client";
import * as profileClient from "./client";

export default function Affiliations (
    {profile}: { profile: any; })
{
    const profileId = profile._id;
    const [profileCircles, setProfileCircles] = useState([]);
    const [profileFollowers, setProfileFollowers] = useState([]);
    const [profileFollowing, setProfileFollowing] = useState([]);

    const fetchProfileCircles = async () => {
        const circles = await circleClient.findCirclesForMember(profileId);
        setProfileCircles(circles);
    };
    const fetchProfileFollowers = async () => {
        const followers = await profileClient.findManyProfilesById(profile.followers);
        setProfileFollowers(followers);
    };
    const fetchProfileFollowing = async () => {
        const following = await profileClient.findManyProfilesById(profile.following);
        setProfileFollowing(following);
    };
    useEffect(() => {
        fetchProfileCircles();
        fetchProfileFollowers();
        fetchProfileFollowing();
    },[profile]);

    return (
        <div id="profile-affiliations" className="fs-5 wd-primary-font">
            <div id="profile-affiliations"
                 className="wd-default-card mb-2 p-4">
                Circles
                <div className="d-flex flex-wrap mt-1">
                {profileCircles.map((circle: any) => (
                    <div id="wd-circle-card"
                         className="d-flex flex-column align-items-center wd-secondary-font fs-6 me-4"
                    >
                        <img src={circle.image}
                             className="wd-circle-pic"
                             alt="Circle banner picture"
                        />
                        <div className="text-center" style={{width: "130px"}}>
                            <Link to={`/Circles/${circle._id}`} className="wd-camb-blue">
                                <p className="text-truncate" style={{overflow: "hidden"}}>
                                    {circle.name}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="d-flex">
                <div id="profile-followers" className="flex-fill align-self-start wd-default-card p-4 me-1">
                    Following
                    <div className="mt-2">
                        {profileFollowing.map((userFollowing: any) => (
                            <div id="wd-following-card"
                                 className="d-flex align-items-center wd-secondary-font fs-5 mb-2"
                            >
                                <img src={userFollowing.avatar}
                                     className="wd-other-user-pic"
                                     alt="User avatar picture"
                                />
                                <Link to={`/Profile/${userFollowing._id}`} className="wd-camb-blue ms-2">
                                        {userFollowing.username}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="profile-following" className="flex-fill align-self-start wd-default-card p-4 ms-1">
                    Followers
                    <div className="mt-2">
                        {profileFollowers.map((userFollower: any) => (
                            <div id="wd-following-card"
                                 className="d-flex align-items-center wd-secondary-font fs-5 mb-2"
                            >
                                <img src={userFollower.avatar}
                                     className="wd-other-user-pic"
                                     alt="User avatar picture"
                                />
                                <Link to={`/Profile/${userFollower._id}`} className="wd-camb-blue ms-2">
                                    {userFollower.username}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}