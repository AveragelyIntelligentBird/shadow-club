import React, { ReactElement } from 'react';
import CommunityHeader from './CommunityHeader';
import { communities } from '../Database';
import './styles.css';

export default function Circles(): ReactElement {
    return (
        <div id='community-list'>
            {communities.map((community) => (
                <div key={community.id} className='community-list'>
                    <CommunityHeader
                        id={community.id}
                        name={community.name}
                        description={community.description}
                        bannerImage={community.image}
                        member={false}
                    />
                </div>
            ))}
        </div>
    );
}