import React, { useState, ReactElement } from 'react';
import './styles.css';
import { Routes, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import * as client from './client';
import { useSelector } from 'react-redux';

export default function HomeFeed() {
    // const tabs = ["Subscribed", "All", "Following"]
    const user = useSelector((state: any) => state.accountReducer)["currentUser"];
    const [allPosts, setAllPosts] = useState<any[]>([]);
    const [subPosts, setSubPosts] = useState<any[]>([]);
    const [followingPosts, setFollowingPosts] = useState<any[]>([]);
    const {pathname} = useLocation();
    const fetchPosts = async () => {
        if (user) {
            console.log("user", user)
            let all = await client.findAllPosts();
            const publicPosts = await client.findPublicPosts();
            // use the publicPosts list to add a public field to each object in all
            all = all.map((p: any) => ({...p, public: publicPosts.includes(p._id)}));
            // Add an author field to each post in all for whether the user is following the author
            all = await Promise.all(all.map(async (p: any) => {
                const author = await client.findAuthorForPost(p._id);
                p.following = user?.following.includes(author._id || "");
                return p;
            }));
            console.log("added public field to all posts", all)
            // The all tab displays public posts and posts from communities the user is a member of
            all = all.filter((p: any) => (user?.memberOf.includes(p.circle) || p.public));
            console.log("got disp all", all)
            setAllPosts([...all]);
            // The subscribed tab displays posts from communities the user is a member of
            const sub = all.filter((p: any) =>  user?.memberOf.includes(p.circle));
            console.log("got subbed", sub)
            setSubPosts([...sub]);
            // The following tab displays posts from authors the user is following
            const following = all.filter((p: any) => p.following);
            console.log("got following", following)
            setFollowingPosts([...following]);
        } else {
            // The all tab displays only public posts
            const publicPosts = await client.findPublicPosts();
            setAllPosts(publicPosts);
        }
    };
    React.useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="flex-grow-1 wd-bg-ebony p-2">
            <div className="my-1">
                {user && <Link
                    to={"Subscribed"}
                    className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font wd-jet-border ${
                        pathname.includes("Subscribed")
                            ? "wd-green-yellow wd-bg-jet"
                            : "wd-camb-blue"
                    }`}>
                    Subscribed
                </Link>}
                <Link
                    to={"All"}
                    className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font wd-jet-border ${
                        pathname.includes("All")
                            ? "wd-green-yellow wd-bg-jet"
                            : "wd-camb-blue"
                    }`}>
                    All
                </Link>
                {user && <Link
                    to={"Following"}
                    className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font wd-jet-border ${
                        pathname.includes("Following")
                            ? "wd-green-yellow wd-bg-jet"
                            : "wd-camb-blue"
                    }`}>
                    Following
                </Link>}
            </div>
            {/* Routes for the different tabs */}
            <div className="me-4 mt-3 rounded-2">
                <Routes>
                    {/* Route for the Subscribed tab */}
                    {user && <Route path="Subscribed" element={<Feed posts={subPosts}/>}/>}
                    {/* Route for the All tab */}
                    <Route path="All" element={<Feed posts={allPosts}/>}/>
                    {/* Route for the Following tab */}
                    {user && <Route path="Following" element={<Feed posts={followingPosts}/>}/>}
                </Routes>
            </div>
        </div>
    );
};

// {tabs.map((tab) => (
//   <Link
//     to={tab}
//     className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font wd-jet-border ${
//       pathname.includes(tab)
//         ? "wd-green-yellow wd-bg-jet"
//         : "wd-camb-blue"
//     }`}>
//     {tab}
//   </Link>
// ))}