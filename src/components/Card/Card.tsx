import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { addVideo, removeVideo } from '@/features/videoSlice';
import { getPlayTime, getTimeStamp } from '@/utils';
import { BookmarkIcon } from '@/assets/icons';

const Card = (data: any) => {
  const [isAdded, setIsAdded] = useState(false);

  const movie = {
    videoId: data.data.id,
    title: data.data.snippet.title,
    channelTitle: data.data.snippet.channelTitle,
    thumbnail: data.data.snippet.thumbnails.medium.url,
    duration: data.data.contentDetails?.duration ?? '',
  };

  const dispatch = useDispatch();

  const handleAddVideo = () => {
    if (!isAdded) {
      dispatch(addVideo(movie.videoId));
      setIsAdded(true);
    }
    if (isAdded) {
      dispatch(removeVideo(movie.videoId));
      setIsAdded(false);
    }
  };

  return (
    <Layout>
      <ImageBox>
        <BookmarkButton onClick={handleAddVideo}>
          <BookmarkIcon />
        </BookmarkButton>
        <Image src={movie.thumbnail}></Image>
        {movie.duration && <Duration>{getTimeStamp(getPlayTime(movie.duration))}</Duration>}
      </ImageBox>
      <Title>{movie.title}</Title>
      <ChannelTitle>{movie.channelTitle}</ChannelTitle>
    </Layout>
  );
};

const Layout = styled.div`
  margin-bottom: 2rem;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const ImageBox = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

const Duration = styled.p`
  position: absolute;
  bottom: 0.5rem;
  right: 0.2rem;
  background-color: #00000077;
  color: #ffffff;
  overflow: hidden;
  padding: 0.3rem;
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Title = styled.h2`
  margin-top: 0.3rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.subText};
`;

export default Card;
