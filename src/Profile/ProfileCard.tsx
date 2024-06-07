import {GiHoodedFigure} from "react-icons/gi";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {GrEdit} from "react-icons/gr";
import {BsEyeFill} from "react-icons/bs";
import {followProfile, unfollowProfile} from "./ProfileReducer";
import {RiEyeCloseLine} from "react-icons/ri";

export default function ProfileCard(
    {profile}: { profile: any; })
{
    const dispatch = useDispatch();
    const { uid, profileId } = useParams();
    const isThisUser = (profile) && (uid === profileId);
    return (
        <div id="profile-card"
             className="col-3 wd-default-card align-self-start mx-4 ms-5 p-5">
            <div id="username" className="d-flex align-items-center">
                <div className="fs-3 wd-green-yellow wd-primary-font px-1">
                    {profile.username}
                </div>
                {
                    isThisUser &&
                    <Link to="Edit">
                        <GrEdit className="fs-4 ms-2 wd-camb-blue wd-color-on-hover"/>
                    </Link>
                }
                {
                    !isThisUser && ((profile.profileData.followers.includes(uid))
                        ?
                        <BsEyeFill
                            className="fs-2 ms-2 wd-camb-blue wd-color-on-hover"
                            onClick={() => dispatch(unfollowProfile({profileId: profileId, userId: uid}))}
                        />
                        :
                        <RiEyeCloseLine
                            className="fs-2 ms-2 wd-camb-blue wd-color-on-hover"
                            onClick={() => dispatch(followProfile({profileId: profileId, userId: uid}))}
                        />)
                }
            </div>
            <div className="d-flex justify-content-center">
                <img src={profile.profileData.avatar}
                     className="wd-profile-pic"
                     alt="avatar pfp"
                />
            </div>
            <div className="wd-green-yellow wd-secondary-font mt-3">
                {profile.profileData.bio} <br/><br/>
                {profile.profileData.MBTI}, {profile.profileData.starSign}
            </div>
            <div className="wd-hor-divider"></div>
            <div className="wd-green-yellow wd-secondary-font">
                Joined {profile.profileData.memberSince}
            </div>
        </div>
    );
}