import React, { ReactElement } from 'react';
import { communities, posts, users } from '../Database';
import { useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';

import Post from '../Posts/Post';
import Feed from '../Posts/Feed';

export default function CommunityFeed(): ReactElement {
    const { uid, id } = useParams();
    const community = communities.find((community) => community.id === id);
    const user = users.find((user) => user.uid === uid);

    const communityPosts = posts.filter((post) => post.community === id).map((p) => {return {...p, liked: user?.profileData.likes.includes(p.id)}});

    return (
      <div id="community-feed" className='wd-bg-ebony'>
        <div className='pb-2'>
          <CommunityHeader 
            id={community?.id || "0"}
            name={community?.name || ""}
            description={community?.description || ""}
            bannerImage={community?.image || ""}/>
        </div>
        {/* Only display feed of posts if user is a community member*/}
        {(user?.profileData.memberOf.includes(id || '') || community?.public)&& <Feed posts={communityPosts}/>}
      </div>
    );
}