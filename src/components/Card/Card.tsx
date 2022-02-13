import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { playVideo, addVideo, removeVideo } from '@/features/videoSlice';
import { getPlayTime, getTimeStamp } from '@/utils';
import { PlayIcon, BookmarkIcon } from '@/assets/icons';

interface IBookmarkButton {
  onClick: () => void;
  isAdded: boolean;
}

const Card = (data: any) => {
  const [isAdded, setIsAdded] = useState(data.data.bookmark);

  const dispatch = useDispatch();

  const handleAddVideo = () => {
    if (isAdded) {
      dispatch(removeVideo({ ...data.data, bookmark: false }));
      setIsAdded(false);
    }
    if (!isAdded) {
      dispatch(addVideo({ ...data.data, bookmark: true }));
      setIsAdded(true);
    }
  };

  const handlePlayVideo = () => {
    dispatch(playVideo(data.data));
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
        <Image src={data.data.snippet.thumbnails.medium.url}></Image>
        {data.data.contentDetails.duration && (
          <Duration>{getTimeStamp(getPlayTime(data.data.contentDetails.duration))}</Duration>
        )}
      </ImageBox>
      <Title>{data.data.snippet.title}</Title>
      <ChannelTitle>{data.data.snippet.channelTitle}</ChannelTitle>
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

const PlayButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

const BookmarkButton = styled.button<IBookmarkButton>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};
  border: none;

  svg {
    fill: ${(props) => (props.isAdded ? ({ theme }) => theme.mode.mainText : 'none')};
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
