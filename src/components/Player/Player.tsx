import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';

import { getPlayTime, getTimeStamp } from '@/utils';
import { getVideoSelector } from '@/features/videoSlice';

const Player = () => {
  const nowVideo = useSelector(getVideoSelector);
  const [isPlay, setIsPlay] = useState(true);

  const onClick = () => {
    setIsPlay(!isPlay);
  };

  // const opts = {
  //   height: '0',
  //   width: '0',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  return (
    <>
      {nowVideo && (
        <Layout>
          <Image src={nowVideo?.thumbnail} />

          <InfoBox>
            <Title>{nowVideo?.title}</Title>
            <ChannelTitle>{nowVideo?.channelTitle}</ChannelTitle>
            {nowVideo && (
              <Duration>
                {getTimeStamp(0)} /{getTimeStamp(nowVideo && getPlayTime(nowVideo?.duration))}
              </Duration>
            )}
          </InfoBox>

          {/* <YouTube width={0} height={0} videoId={nowVideo?.id} onPlay={isPlay} onPause={isPlay} /> */}

          <ControllerBox>
            <SkipBackIcon width={20} height={20} />
            {isPlay ? <PlayIcon onClick={onClick} /> : <PauseIcon onClick={onClick} />}
            <SkipForwardIcon width={20} height={20} />
          </ControllerBox>
        </Layout>
      )}
    </>
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
  border-top: 1px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;

  svg path {
    fill: ${({ theme }) => theme.mode.mainText};
  }

  iframe {
    width: 1rem;
    height: 1rem;
  }
`;

const InfoBox = styled.div`
  width: 12rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

const Image = styled.img`
  height: 3rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

const Duration = styled.p`
  margin-top: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

const ControllerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Player;
