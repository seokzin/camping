import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';
import { PlayListCard, Spinner } from '@/components';

const PlayList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const videos = useSelector((state: RootState) => state.videos.videos);

  const fetchData = async () => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet,contentDetails',
        // q: term,
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'KR',
        videoCategoryId: '10', // Music
      },
    });
    setData(response.data.items);
    setLoading(false);
  };

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <>
      <h1>Playlist</h1>

      <div>
        {videos.map((name) => (
          <PlayListCard name={name} />
        ))}
      </div>

      {/* <iframe
        id='player'
        width='640'
        height='360'
        src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
      ></iframe> */}
    </>
  );
};

export default PlayList;
