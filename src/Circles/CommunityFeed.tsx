import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import Feed from '../Posts/Feed';
import * as client from './client';
import { useSelector } from 'react-redux';

export default function CommunityFeed(): ReactElement {
    // get the id of the community from the url
    const { id } = useParams();
    const [circle, setCircle] = useState<any>();
    const [posts, setPosts] = useState<any[]>([]);
    const { user } = useSelector((state: any) => state.accountReducer);

    const fetchCircle = async () => {
      const circle = await client.findCircleForId(id || "");
      setCircle(circle);
    };
    const fetchPosts = async () => {
      const posts = await client.findPostsForCircle(id || "");
      setPosts(posts);
    };
    // Use a useEffect to load the circles on the first render
    useEffect(() => {
      fetchCircle();
      fetchPosts();
    }, []);

    return (
      <div id="community-feed" className='wd-bg-ebony'>
        <div className='pb-2'>
          <CommunityHeader 
            cid={id || "0"}
            name={circle?.name || ""}
            description={circle?.description || ""}
            bannerImage={circle?.image || ""}
            visibility={circle?.public || false}/>
        </div>
        {/* Only display feed of posts if user is a community member*/}
        {(circle?.public || (user && user?.profileData.memberOf.includes(id || ''))) &&  <Feed posts={posts}/> }
      </div>
    );
}