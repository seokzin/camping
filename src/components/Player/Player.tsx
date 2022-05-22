import { useEffect, useState } from 'react';
import YouTube from '@u-wave/react-youtube';

import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon } from '@/assets/icons';
import { useAppSelector } from '@/app/store';
import { getPlayTime, getTimeStamp } from '@/utils';

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<any>();
  const [playTime, setPlayTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlayTime(player?.getCurrentTime());
    }, 500);

    return () => clearInterval(timer);
  }, [isPlaying, player]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStateChange = (e: any) => {
    setPlayer(e.target);
    setPlayTime(player.getCurrentTime());
  };

  const handleReady = (e: any) => {
    setPlayer(e.target);
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
          {getTimeStamp(playTime)} / {getTimeStamp(getPlayTime(playingVideo.duration))}
        </Duration>
      </InfoBox>

      <YouTube
        video={playingVideo.id}
        paused={isPlaying}
        onStateChange={handleStateChange}
        onReady={handleReady}
        autoplay
      />

      <ControllerBox>
        <SkipBackIcon width={20} height={20} />
        {isPlaying ? <PlayIcon onClick={togglePlay} /> : <PauseIcon onClick={togglePlay} />}
        <SkipForwardIcon width={20} height={20} />
      </ControllerBox>
    </Layout>
  );
};

export default Player;
