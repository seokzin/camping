import { useState } from 'react';
import YouTube from '@u-wave/react-youtube';

import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { getPlayTime, getTimeStamp } from '@/utils';
import { setVideo } from '@/features/playList/playListSlice';

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
  const { playingVideo } = useAppSelector((state) => state.playList);
  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!playingVideo) {
    return <></>;
  }

  return (
    <Layout>
      <Image src={playingVideo.thumbnail} />

      <InfoBox>
        <Title>{playingVideo.title}</Title>
        <ChannelTitle>{playingVideo?.channelTitle}</ChannelTitle>
        <Duration>
          {getTimeStamp(0)} /{getTimeStamp(getPlayTime(playingVideo.duration))}
        </Duration>
      </InfoBox>

      <YouTube video={playingVideo.id} paused={isPlaying} autoplay />

      <ControllerBox>
        <SkipBackIcon width={20} height={20} />
        {isPlaying ? <PlayIcon onClick={togglePlay} /> : <PauseIcon onClick={togglePlay} />}
        <SkipForwardIcon width={20} height={20} />
      </ControllerBox>
    </Layout>
  );
};

export default Player;
