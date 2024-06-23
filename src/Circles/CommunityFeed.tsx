import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import Feed from '../Posts/Feed';
import * as client from './client';
import { useSelector } from 'react-redux';

export default function CommunityFeed() {
    // get the id of the community from the url
    const { id } = useParams();
    const [circle, setCircle] = useState<any>();
    const [posts, setPosts] = useState<any[]>([]);
    const [moderators, setModerators] = useState<any[]>([]);
    // const { user } = useSelector((state: any) => state.accountReducer);
    let user = useSelector((state: any) => state.accountReducer)["currentUser"];
    
    const fetchCircle = async () => {
      const circle = await client.findCircleForId(id || "");
      setCircle(circle);
    };
    const fetchPosts = async () => {
      const posts = await client.findPostsForCircle(id || "");
      setPosts(posts);
    };
    const fetchModerators = async () => {
      const mods = await client.findModeratorsForCircle(id || "");
      setModerators(mods);
    };
    // Use a useEffect to load the circles on the first render
    useEffect(() => {
      fetchCircle();
      fetchPosts();
      fetchModerators();
    }, []);
    if (!circle) return null;
    return (
      <div id="community-feed" className='wd-bg-ebony'>
        <div className='pb-2 mb-2'>
          <CommunityHeader 
            cid={id || "0"}
            name={circle?.name || ""}
            description={circle?.description || ""}
            bannerImage={circle?.image || ""}
            visibility={circle?.public || false}/>
        </div>
        {/* If the circle is public display the feed */}
        {(circle.public) ? <Feed posts={posts}/>
          /* If the user is anonymous and the community is private, route to login */
          : (!user) ? <Link className="login" to="/SignIn">Login to join</Link>
          /* If the user is a member of the circle display the feed */
          : (user && user?.memberOf.includes(id || '')) ? <Feed posts={posts}/>
          /* If the user is not a member of the circle, display a message to contact a moderator */
          : (user) ? <div className='private-message'>
                        <h2 className='private-message-title'> 
                          You must be a member of this community to view posts. 
                          {moderators[0] && (
                          <> 
                            &#160;Contact <Link className='private-message-title' to={`/Profile/${moderators[0]._id}`}>{moderators[0].username}</Link>to join.
                          </>)}
                        </h2>
                    </div>
          : null}
      </div>
    );
}