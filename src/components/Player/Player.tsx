import styled, { css } from 'styled-components';
import YouTube from 'react-youtube';

import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';

import { useAppDispatch, useAppSelector } from '@/app/store';
import { getPlayTime, getTimeStamp } from '@/utils';
import { selectPlayer, setVideo, playVideo, stopVideo } from '@/features/playerSlice';
import { useState } from 'react';

interface LayoutProps {
  status: 'play' | 'stop';
}

const Player = () => {
  const [player, setPlayer] = useState<any>(undefined);
  const { playingVideo, status } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  // const onClick = () => {
  //   if (playingVideo) {
  //     status === 'play' ? dispatch(stopVideo(playingVideo)) : dispatch(playVideo(playingVideo));
  //   }
  // };

  const onReady = (e: any) => {
    setPlayer(e.target);
    console.log(player);
  };

  const onPlay = () => {
    if (playingVideo) {
      player.pauseVideo();
      dispatch(playVideo(playingVideo));
    }
  };

  const onPause = () => {
    if (playingVideo) {
      player.pauseVideo();
      dispatch(stopVideo(playingVideo));
    }
  };

  return (
    <Layout status={status}>
      <Image src={playingVideo?.thumbnail} />

      <InfoBox>
        <Title>{playingVideo?.title}</Title>
        <ChannelTitle>{playingVideo?.channelTitle}</ChannelTitle>
        {playingVideo && (
          <Duration>
            {getTimeStamp(0)} /{getTimeStamp(playingVideo && getPlayTime(playingVideo?.duration))}
          </Duration>
        )}
      </InfoBox>

      <YouTube videoId={playingVideo?.id} onReady={onReady} onPlay={onPlay} onPause={onPause} />

      <ControllerBox>
        <SkipBackIcon width={20} height={20} />
        {status === 'play' ? <PlayIcon onClick={onPlay} /> : <PauseIcon onClick={onPause} />}
        <SkipForwardIcon width={20} height={20} />
      </ControllerBox>
    </Layout>
  );
};

const Layout = styled.div<LayoutProps>`
  box-sizing: border-box;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  width: 100%;
  height: 4rem;

  ${(props) =>
    !props.status &&
    css`
      visibility: hidden;
    `}

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-top: 1px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;

  svg path {
    fill: ${({ theme }) => theme.mode.mainText};
  }

  // Youtube
  iframe {
    width: 2rem;
    height: 2rem;
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
