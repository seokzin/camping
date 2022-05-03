import YouTube from 'react-youtube';

import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';

import { useAppDispatch, useAppSelector } from '@/app/store';
import { getPlayTime, getTimeStamp } from '@/utils';
import { playVideo, stopVideo } from '@/features/player/playerSlice';
import { useState } from 'react';
import {
  ChannelTitle,
  ControllerBox,
  Duration,
  Image,
  InfoBox,
  Layout,
  Title,
} from './Player.styled';

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

export default Player;
