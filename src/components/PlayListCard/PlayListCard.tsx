import { useState } from 'react';
import { Video } from '@/features/store.types';

import { PlayIcon, XIcon } from '@/assets/icons';
import { removeVideo } from '@/features/playList/playListSlice';
import { setVideo } from '@/features/player/playerSlice';
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

  // store depandency가 존재 -> Card의 로직이 딥한 부분 + store 로직이 섞여서 재활용성 낮음
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
