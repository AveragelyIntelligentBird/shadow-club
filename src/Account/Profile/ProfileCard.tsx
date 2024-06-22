import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {GrEdit} from "react-icons/gr";
import {BsEyeFill} from "react-icons/bs";
import {setCurrentUser} from "../reducer";
import {RiEyeCloseLine} from "react-icons/ri";
import * as client from "../client";

export default function ProfileCard({profile, fetchProfile}: {
    profile: any;
    fetchProfile: () => void;
})
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser =
        useSelector((state: any) => state.accountReducer)["currentUser"];
    const uid = currentUser._id;
    const { profileId } = useParams();
    const isThisUser = (profileId === "u");

    const followUser = async () => {
        const newCurrentUser = {...currentUser, following: [...currentUser.following, profileId]};
        const newProfile = {...profile, followers: [...profile.followers, uid]};
        await client.updateProfile(newCurrentUser);
        await client.updateProfile(newProfile);
        dispatch(setCurrentUser(newCurrentUser));
        fetchProfile()
    };

    const signOut = async () => {
        navigate("/SignIn");
        await client.signout();
        dispatch(setCurrentUser(null));
    };

    const unfollowUser = async () => {
        const newCurrentUser = {
            ...currentUser,
            following: currentUser.following.filter((f: any) => f !== profileId)};
        const newProfile = {
            ...profile,
            followers: profile.followers.filter((f: any) => f !== uid)};
        await client.updateProfile(newCurrentUser);
        await client.updateProfile(newProfile);
        dispatch(setCurrentUser(newCurrentUser));
        fetchProfile()
    };

    return (
        <div id="profile-card"
             className={`col-3 wd-default-card align-self-start mx-4 ms-5 p-5
             wd-green-yellow wd-secondary-font
             ${(profile.role === "user") ? "" : `wd-${profile.role}-border`}`}
        >
            <div className="d-flex justify-content-center mb-1 wd-camb-blue">
                {
                    isThisUser &&
                    <Link to="Edit/Profile" className="text-decoration-none wd-camb-blue">
                        <span className="wd-color-on-hover">
                            Edit Profile <GrEdit/>
                        </span>
                    </Link>

                }
                {
                    !isThisUser && ((profile.followers.includes(uid))
                        ?
                        <BsEyeFill
                            className="fs-2 mb-1 wd-color-on-hover"
                            onClick={unfollowUser}
                            title="Unfollow User"
                        />
                        :
                        <RiEyeCloseLine
                            className="fs-2 mb-1 wd-color-on-hover"
                            onClick={followUser}
                            title="Follow User"
                        />)
                }
            </div>
            <div id="username" className="d-flex justify-content-center">
                <div className="fs-3 wd-primary-font px-1">
                    {profile.username}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={profile.avatar}
                     className="wd-profile-pic"
                     alt="avatar pfp"
                />
            </div>
            <div className="mt-3 mb-4">
                {profile.bio}
            </div>
            <div className="">
                {profile.MBTI}, {profile.starSign}
            </div>
            <div className="wd-hor-divider"></div>
            <div className="d-flex">
                <div>
                    Joined {profile.memberSince}
                </div>
                <div className="flex-grow-1"/>
                {
                    (isThisUser) &&
                    <div className="wd-mahogany text-decoration-underline" onClick={signOut}>
                        <span className="wd-color-mah-on-hover">Sign out</span>
                    </div>
                }
            </div>
        </div>
    );
}