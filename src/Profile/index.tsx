import {useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router";
import {Link, Route, Routes} from "react-router-dom";
import './index.css';
import NotFound from "../NotFound";
import { useParams } from "react-router";
import { GrEdit } from "react-icons/gr";
import {GiHoodedFigure} from "react-icons/gi";
import {BsEyeFill} from "react-icons/bs";
import {RiEyeCloseLine} from "react-icons/ri";
import {followProfile, unfollowProfile} from "./ProfileReducer";
import ProfileCard from "./ProfileCard";
import Affiliations from "./Affiliations";


export default function Profile() {
    const { pathname} = useLocation();
    const { profileId } = useParams();
    const { profiles } = useSelector((state:any) => state.profilesReducer);
    const profile =
        profiles.find((profile : any) => profile.uid === profileId);
    const tabs = ["Posts", "Replies", "Affiliations"];
    return (
        (!profile)
            ?
            <NotFound subject="User"/>
            :
            <div id="profile-page" className="d-flex">
                <ProfileCard profile={profile}/>
                <div id="profile-content" className="flex-grow-1">
                    <div id="profile-tabs" className="my-1">
                        {
                            tabs.map((tab) => (
                                <Link to={tab}
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
                                profile.profileData.posts.map(
                                    (post: any) => (
                                        <div className="wd-default-card wd-secondary-font mb-2 p-3">
                                            Post {post}
                                        </div>
                                    )
                                )
                            }/>
                            <Route path="Replies" element={
                                profile.profileData.replies.map(
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
            </div>
    );
}