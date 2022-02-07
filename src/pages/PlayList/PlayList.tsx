import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';
import { PlayListCard } from '@/components';

const PlayList = () => {
  const videos = useSelector((state: RootState) => state.videos.videos);

  return (
    <>
      <h1>Playlist</h1>

      <div>
        {videos.map((name) => (
          <PlayListCard name={name} />
        ))}
      </div>

      <iframe
        id='player'
        width='640'
        height='360'
        src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      ></iframe>
    </>
  );
};

export default PlayList;
