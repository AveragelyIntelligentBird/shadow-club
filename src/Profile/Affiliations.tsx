import { communities, users } from "../Database";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

export default function Affiliations (
    {profile}: { profile: any; })
{
    const { uid } = useParams();
    const profileCircles =
        profile.memberOf.map(
            (circleId: any) => (
                communities.find((community: any) => community.id === circleId)
            )
        );
    const profileFollowers =
        profile.followers.map(
            (userId: any) => (
                users.find((user: any) => user.uid === userId)
            )
        );
    const profileFollowing =
        profile.following.map(
            (userId: any) => (
                users.find((user: any) => user.uid === userId)
            )
        );
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
                            <Link to={`/${uid}/Circles/${circle.id}`} className="wd-camb-blue">
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
                                <Link to={`/${uid}/Profile/${userFollowing.uid}`} className="wd-camb-blue ms-2">
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
                                <Link to={`/${uid}/Profile/${userFollower.uid}`} className="wd-camb-blue ms-2">
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