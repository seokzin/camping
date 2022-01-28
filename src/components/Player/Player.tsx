import React from 'react';
import styled from 'styled-components';
import { dataVideo, dataVideoDetail } from '@/assets/data';

const data = dataVideo.items[0].snippet;
const duration = dataVideoDetail.items[0].contentDetails.duration;

const Player = () => {
  const video = {
    title: data.title,
    channel: data.channelTitle,
    thumbnail: data.thumbnails.default.url,
    duration,
  };

  return (
    <Layout>
      <Image src={video.thumbnail} />

      <div>
        <Title>{video.title}</Title>
        <ChannelTitle>{video.channel}</ChannelTitle>
        <p>{video.duration}</p>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 0 1rem;

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

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.subText};
`;

const Image = styled.img`
  height: 3rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

export default Player;
