import React, { useState, ReactElement } from 'react';
import './styles.css';
import { Routes, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import * as client from './client';
import { useSelector } from 'react-redux';

export default function HomeFeed() {
  const tabs = ["Subscribed", "All", "Following"]
  const { user } = useSelector((state: any) => state.accountReducer);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [subPosts, setSubPosts] = useState<any[]>([]);
  const [followingPosts, setFollowingPosts] = useState<any[]>([]);
  const { pathname } = useLocation();
  const fetchPosts = async () => {
    let all = await client.findAllPosts();
    // The all tab displays public posts and posts from communities the user is a member of
    all = all.filter((p: any) => (user?.profileData.memberOf.includes(p.community) || p.public));
    setAllPosts(all);
    // The subscribed tab displays posts from communities the user is a member of
    const sub = all.filter((p: any) => user?.profileData.memberOf.includes(p.community));
    setSubPosts(sub);
    // The following tab displays posts from users the user is following (that are public or from communities the user is a member of)
    const following = all.filter((p: any) => user?.profileData.following.includes(p.author));
    setFollowingPosts(following);
};

  return (
    <div className="flex-grow-1 wd-bg-ebony p-2">
      <div className="my-1">
        {tabs.map((tab) => (
          <Link
            to={tab}
            className={`text-decoration-none p-2 me-2 rounded-2 wd-secondary-font wd-jet-border ${
              pathname.includes(tab)
                ? "wd-green-yellow wd-bg-jet"
                : "wd-camb-blue"
            }`}>
            {tab}
          </Link>
        ))}
      </div>
      {/* Routes for the different tabs */}
      <div className="me-4 mt-3 rounded-2">
        <Routes>
          {/* Route for the Subscribed tab */}
          <Route path="Subscribed" element={<Feed posts={subPosts} />} />
          {/* Route for the All tab */}
          <Route path="All" element={<Feed posts={allPosts} />} />
          {/* Route for the Following tab */}
          <Route path="Following" element={<Feed posts={followingPosts} />} />
        </Routes>
      </div>
    </div>
  );
}