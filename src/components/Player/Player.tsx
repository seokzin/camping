import React from 'react';
import styled from 'styled-components';
import { dataVideo, dataVideoDetail } from '@/assets/data';

const data = dataVideo.items[0].snippet;
const duration = dataVideoDetail.items[0].contentDetails.duration;

const Player = () => {
  const video = {
    title: data.title,
    channel: data.channelId,
    thumbnail: data.thumbnails.default.url,
    duration,
  };

  return (
    <Layout>
      <p>{video.title}</p>
      <p>{video.channel}</p>
      <p>{video.thumbnail}</p>
      <p>{video.duration}</p>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  width: 100%;
  height: 4rem;

  /* background-color: ${({ theme }) => theme.mode.mainColor}; */
  background-color: ${({ theme }) => theme.mode.subColor};
  z-index: 100;
`;

export default Player;
