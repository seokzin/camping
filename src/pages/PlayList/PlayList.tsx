import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';
import { PlayListCard } from '@/components';

const PlayList = () => {
  const videos = useSelector((state: RootState) => state.videos.value);

  return (
    <>
      <h1>Playlist</h1>

      <div>
        {videos.map((name) => (
          <PlayListCard name={name} />
        ))}
      </div>
    </>
  );
};

export default PlayList;
