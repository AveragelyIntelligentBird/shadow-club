import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import * as postClient from "../Posts/client";
import * as circleClient from "../Circles/client";
import * as profileClient from "../Account/client";
import {useNavigate} from "react-router";
import Post from "../Posts/Post";
import CommunityHeader from "../Circles/CommunityHeader";

export default function Search() {
    const navigate = useNavigate()
    const [searchPrompt, setPromptSearch] = useState("");
    const [searchScope, setSearchScope] = useState("Post");
    const [results , setResults] = useState([]);

    const search = async () => {
        if (searchPrompt === "") return;

        if (searchScope === "Post") {
            const posts = await postClient.findPostsByPartialName(searchPrompt);
            setResults(posts);
            navigate("/Search/Posts");
        } else if (searchScope === "Profile") {
            const profiles = await profileClient.findProfilesByPartialName(searchPrompt);
            setResults(profiles);
            navigate("/Search/Profiles");
        } else if (searchScope === "Circle") {
            const circles = await circleClient.findCirclesByPartialName(searchPrompt);
            setResults(circles);
            navigate("/Search/Circle");
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-lg-9 mx-2">
                <div className="input-group wd-default-card p-3 mb-3">
                    <input className="form-control wd-input-field-format"
                           type="search"
                           placeholder="Search Cabal"
                           value={searchPrompt}
                           onChange={(e) => setPromptSearch(e.target.value)}
                    />
                    <div className="input-group-append d-flex">
                        <select
                            className="form-select fw-bold wd-input-field-format rounded-0"
                            id="wd-search-scope"
                            value={searchScope}
                            onChange={(e) =>
                                setSearchScope(e.target.value)}
                        >
                            <option value="Post">Post</option>
                            <option value="Profile">Profile</option>
                            <option value="Circle">Circle</option>
                        </select>
                        <button className="wd-primary-btn wd-primary-btn-on-hover rounded-start-0"
                                onClick={search}>
                            Search
                        </button>
                    </div>
                </div>

                <Routes>
                    <Route path="/Search" element={<></>}/>
                    <Route path="Posts"
                           element={
                               results.map((post: any) => (
                                   <Post id={post._id}/>
                               ))
                           }
                    />
                    <Route path="Profiles"
                           element={results.map((profile: any) => (
                               <div id="wd-following-card"
                                    className={`d-flex wd-default-card align-items-center wd-secondary-font fs-5 mb-2
                                    ${(profile.role === "user") ? "" : `wd-${profile.role}-border`}`}
                               >
                                   <img src={profile.avatar}
                                        className="wd-pfp-choice-pic"
                                        alt="User avatar"
                                   />
                                   <Link to={`/Profile/${profile._id}`} className="wd-camb-blue ms-2">
                                    <span className="wd-color-on-hover">
                                        {profile.username}
                                    </span>
                                   </Link>

                               </div>
                           ))}
                    />
                    <Route path="Circle"
                           element={
                               results.map((circle: any) => (
                                   <div className="mb-2">
                                       <CommunityHeader
                                           cid={circle._id}
                                           name={circle.name}
                                           description={circle.description}
                                           bannerImage={circle.image}
                                           visibility={circle.public}
                                       />
                                   </div>
                               ))
                           }
                    />
                </Routes>
            </div>
        </div>
    );

}