import { useState } from 'react';

import { PlayIcon, XIcon } from '@/assets/icons';
import type { Video } from '@/features/store.types';
import { removeVideo } from '@/features/playList/playListSlice';
import { setVideo } from '@/features/playList/playListSlice';
import { useAppDispatch } from '@/app/store';

import {
  ChannelTitle,
  DeleteButton,
  Image,
  ImageBox,
  Info,
  InfoBox,
  Layout,
  PlayIconBox,
  Title,
} from './PlayListCard.styled';

interface PlayListCardProps {
  video: Video;
}

const PlayListCard = ({ video }: PlayListCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useAppDispatch();

  const handleRemoveVideo = () => {
    dispatch(removeVideo({ ...video, bookmark: false }));
  };

  const handlePlayVideo = () => {
    dispatch(setVideo(video));
    setIsPlaying(true);
  };

  return (
    <Layout onClick={handlePlayVideo}>
      <ImageBox>
        <PlayIconBox isPlaying={isPlaying}>
          <PlayIcon />
        </PlayIconBox>
        <Image src={video.thumbnail} isPlaying={isPlaying}></Image>
      </ImageBox>

      <InfoBox>
        <Info>
          <Title>{video.title}</Title>
          <ChannelTitle>{video.channelTitle}</ChannelTitle>
        </Info>
        <DeleteButton onClick={handleRemoveVideo}>
          <XIcon />
        </DeleteButton>
      </InfoBox>
    </Layout>
  );
};

export default PlayListCard;
