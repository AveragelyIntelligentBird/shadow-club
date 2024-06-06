import {useSelector} from "react-redux";
import { useLocation } from "react-router";
import {Link, Route, Routes} from "react-router-dom";
import './index.css';
import { useParams } from "react-router";
import { GrEdit } from "react-icons/gr";
import {GiHoodedFigure} from "react-icons/gi";

export default function Profile() {
    const { uid } = useParams();
    const { profiles } = useSelector((state:any) => state.profilesReducer);
    const user =
        profiles.find((user : any) => user.uid === uid);
    const tabs = ["Posts", "Replies", "Affiliations"];
    const {pathname} = useLocation();
    return (
        <div id="profile-page">
            {
                user &&
                <div className="d-flex">
                    <div id="profile-card"
                         className="col-3 wd-bg-jet mx-4 ms-5 p-5 rounded-2">
                        <div id="username" className="d-flex">
                            <div className="fs-3 wd-green-yellow wd-primary-font px-1">
                                {user.username}
                            </div>
                            <Link to="Edit">
                                <GrEdit className="fs-4 ms-2 wd-camb-blue wd-color-on-hover"/>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={user.profileData.avatar}
                                 className="wd-profile-pic"
                                 alt="avatar pfp"
                            />
                        </div>
                        <div className="wd-green-yellow wd-secondary-font mt-3">
                            {user.profileData.bio} <br/><br/>
                            {user.profileData.MBTI}, {user.profileData.starSign}
                        </div>
                        <div className="wd-hor-divider"></div>
                        <div className="wd-green-yellow wd-secondary-font">
                            Joined {user.profileData.memberSince}
                        </div>
                    </div>
                    <div id="profile-content"
                         className="flex-grow-1">
                        <div className="my-1">
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
                        <div className="me-4 mt-3 rounded-2">
                            <Routes>
                                <Route path="Posts" element={
                                    user.profileData.posts.map(
                                        (post : any) => (
                                            <div className="wd-bg-jet wd-green-yellow rounded-2
                                                            wd-secondary-font mb-2 p-3">
                                                Post {post}
                                            </div>
                                        )
                                    )
                                }/>
                                <Route path="Replies" element={
                                    user.profileData.replies.map(
                                        (reply : any) => (
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