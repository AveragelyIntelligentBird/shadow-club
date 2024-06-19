import React, { ReactElement, useEffect, useState } from 'react';
import CommunityHeader from './CommunityHeader';
import './styles.css';
import { useParams } from 'react-router';
import * as client from './client';
import { useSelector } from 'react-redux';

export default function Circles(): ReactElement {
    const [circles, setCircles] = useState<any[]>([]);
    // const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCircles = async () => {
        const circles = await client.fetchAllCircles();
        setCircles(circles);
    };
    // Use a useEffect to load the circles on the first render
    useEffect(() => {
        fetchCircles();
    }, []);

    return (
        <div id='community-list' className='community-list'>
            {circles.map((circle) => (
                <div key={circle._id} className='community-list-item'>
                    <CommunityHeader
                        cid={circle._id}
                        name={circle.name}
                        description={circle.description}
                        bannerImage={circle.image}
                    />
                </div>
            ))}
        </div>
    );
}