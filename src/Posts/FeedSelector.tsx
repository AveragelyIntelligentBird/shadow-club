import React, { useState, ReactElement } from 'react';
import './styles.css';

export default function FeedSelector({ onSelectFeed }: SelectorProps) : ReactElement {
  const [selectedFeed, setSelectedFeed] = useState('subscribed');

  const handleSelectFeed = (feed: "subscribed" | "all") => {
    setSelectedFeed(feed);
    onSelectFeed(feed);
  };

  return (
    <div className="feed-selector">
      <button
        className={`tab ${selectedFeed === 'subscribed' ? 'selected' : ''}`}
        onClick={() => handleSelectFeed('subscribed')}
      >
        <b>Subscribed Communities</b>
      </button>
      <button
        className={`tab ${selectedFeed === 'all' ? 'selected' : ''}`}
        onClick={() => handleSelectFeed('all')}
      >
        <b>All Communities</b>
      </button>
    </div>

  );
};

type SelectorProps = {
  onSelectFeed: (feed: "subscribed" | "all") => void;
};