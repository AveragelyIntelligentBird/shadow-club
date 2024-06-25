import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useParams} from "react-router-dom";
import * as postClient from "../Posts/client";
import * as circleClient from "../Circles/client";
import * as profileClient from "../Account/client";
import {useNavigate} from "react-router";
import Post from "../Posts/Post";
import CommunityHeader from "../Circles/CommunityHeader";

export default function Search() {
    const navigate = useNavigate();

    const {searchScope, searchPrompt} = useParams();
    const decodedSearchPrompt = (searchPrompt) ? decodeURI(searchPrompt) : "";
    const [searchInput , setSearchInput] = useState(decodedSearchPrompt);
    const [scopeInput , setScopeInput] = useState(searchScope);
    const [newSearch , setNewSearch] = useState(false);
    const [results , setResults] = useState([]);

    const search = async () => {
        if (decodedSearchPrompt === "") return;

        if (searchScope === "Posts") {
            console.log("Searching for prompt", decodedSearchPrompt, "in scope", searchScope);
            const posts = await postClient.findPostsByPartialName(decodedSearchPrompt);
            console.log("Posts found", posts);
            setResults(posts);
        } else if (searchScope === "Profiles") {
            console.log("Searching for prompt", decodedSearchPrompt, "in scope", searchScope);
            const profiles = await profileClient.findProfilesByPartialName(decodedSearchPrompt);
            setResults(profiles);
        } else if (searchScope === "Circle") {
            console.log("Searching for prompt", decodedSearchPrompt, "in scope", searchScope);
            const circles = await circleClient.findCirclesByPartialName(decodedSearchPrompt);
            setResults(circles);
        }
    }

    useEffect(() => {
        console.log("useEffect...");
        search()
    },[newSearch]);

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-lg-9 mx-2">
                <div className="input-group wd-default-card p-3 mb-3">
                    <input className="form-control wd-input-field-format"
                           type="search"
                           placeholder="Search Cabal"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <div className="input-group-append d-flex">
                        <select
                            className="form-select fw-bold wd-input-field-format rounded-0"
                            id="wd-search-scope"
                            value={scopeInput}
                            onChange={(e) =>
                                setScopeInput(e.target.value)}
                        >
                            <option value="Posts">Post</option>
                            <option value="Profiles">Profile</option>
                            <option value="Circle">Circle</option>
                        </select>
                        <button className="wd-primary-btn wd-primary-btn-on-hover rounded-start-0"
                                onClick={() => {
                                    navigate(`/Search/${scopeInput}/${encodeURI(searchInput)}`)
                                    setNewSearch(!newSearch);
                                }}>
                            Search
                        </button>
                    </div>
                </div>
                {
                    (searchScope === "Posts")
                        ?
                        results.map((post: any) => (
                            <Post id={post._id}/>
                        ))
                        : (searchScope === "Profiles")
                            ?
                            results.map((profile: any) => (
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
                            ))
                            : (searchScope === "Circle")
                                ?
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
                                : <div/>
                }
            </div>
        </div>
    );

}