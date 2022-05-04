import { useState } from 'react';

import { useAppDispatch } from '@/app/store';
import { PlayIcon, BookmarkIcon } from '@/assets/icons';
import type { Video } from '@/features/store.types';
import { addVideo, removeVideo } from '@/features/playList/playListSlice';
import { setVideo } from '@/features/playList/playListSlice';
import { getPlayTime, getTimeStamp } from '@/utils';

import {
  BookmarkButton,
  ChannelTitle,
  Duration,
  Image,
  ImageBox,
  Layout,
  PlayButton,
  Title,
} from './Card.styled';

interface CardProps {
  video: Video;
}

const Card = ({ video }: CardProps) => {
  const [isAdded, setIsAdded] = useState(video.bookmark);

  const dispatch = useAppDispatch();

  const handleAddVideo = () => {
    if (isAdded) {
      dispatch(removeVideo({ ...video, bookmark: false }));
      setIsAdded(false);
    }
    if (!isAdded) {
      dispatch(addVideo({ ...video, bookmark: true }));
      setIsAdded(true);
    }
  };

  const handlePlayVideo = () => {
    dispatch(setVideo(video));
  };

  return (
    <Layout>
      <ImageBox>
        <PlayButton onClick={handlePlayVideo}>
          <PlayIcon />
        </PlayButton>

        <BookmarkButton onClick={handleAddVideo} isAdded={isAdded}>
          <BookmarkIcon />
        </BookmarkButton>
        <Image src={video.thumbnail}></Image>
        {video.duration && <Duration>{getTimeStamp(getPlayTime(video.duration))}</Duration>}
      </ImageBox>
      <Title>{video.title}</Title>
      <ChannelTitle>{video.channelTitle}</ChannelTitle>
    </Layout>
  );
};

export default Card;
