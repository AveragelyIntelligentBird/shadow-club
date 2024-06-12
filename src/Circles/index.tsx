import React, { ReactElement } from 'react';
import CommunityHeader from './CommunityHeader';
import { users, communities } from '../Database';
import './styles.css';
import { useParams } from 'react-router';

export default function Circles(): ReactElement {
    // console.log(user);
    return (
        <div id='community-list' className='community-list'>
            {communities.map((community) => (
                <div key={community.id} className='community-list-item'>
                    <CommunityHeader
                        cid={community.id}
                        name={community.name}
                        description={community.description}
                        bannerImage={community.image}
                        member={ /* user?.profileData.memberOf.includes(community.id) */ true}
                    />
                </div>
            ))}
        </div>
    );
}