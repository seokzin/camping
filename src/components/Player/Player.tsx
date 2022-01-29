import React from 'react';
import styled from 'styled-components';
import { dataVideo, dataVideoDetail } from '@/assets/data';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';

import getDuration from '@/utils/getDuration';

const data = dataVideo.items[0].snippet;
const duration = dataVideoDetail.items[0].contentDetails.duration;

const Player = () => {
  const video = {
    title: data.title,
    channel: data.channelTitle,
    thumbnail: data.thumbnails.default.url,
    duration,
  };

  const durat = getDuration(video.duration);

  console.log('asdfsdaf', durat);

  return (
    <Layout>
      <Image src={video.thumbnail} />

      <InfoBox>
        <Title>{video.title}</Title>
        <ChannelTitle>{video.channel}</ChannelTitle>
        {/* <Duration>{durat}</Duration> */}
      </InfoBox>

      <ControllerBox>
        <SkipBackIcon width={20} height={20} />
        <PlayIcon />
        {/* <PauseIcon /> */}
        <SkipForwardIcon width={20} height={20} />
      </ControllerBox>
    </Layout>
  );
};

const Layout = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  width: 100%;
  height: 4rem;

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-top: 2px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;

  svg path {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

const InfoBox = styled.div`
  width: 12rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.mainText};
  margin-bottom: 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

const Image = styled.img`
  height: 3rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

const Duration = styled.p``;

const ControllerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export default Player;
