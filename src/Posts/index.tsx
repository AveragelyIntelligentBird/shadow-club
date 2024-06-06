import React, { useState, ReactElement } from 'react';
import './styles.css';
import { Routes, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Feed from './Feed';
import { posts, users, communities } from '../Database';

// FeedSelector component with tabs
export default function HomeFeed() {
  // Following after Anfisa's work in the Post component
  const { uid } = useParams();
    const user =
        users.find((user) => user.uid === uid);
    const memberOf = user?.profileData.memberOf || [];
    console.log(memberOf);
  const {pathname} = useLocation();

  const allPosts = (posts as Array<any>).filter(
    (p: any) => ((communities.find((c) => c.id === p.community) || {}).public 
      || memberOf.includes(p.community))).map((p: any) => {return {...p, liked: user?.profileData.likes.includes(p.id)}});
  const subPosts = (posts as Array<any>).filter(
    (p: any) => (memberOf.includes(p.community))).map((p: any) => {return {...p, liked: user?.profileData.likes.includes(p.id)}});
  const tabs = ["Subscribed", "All"]

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
        </Routes>
      </div>
    </div>
  );
}