import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { playVideo, addVideo, removeVideo, Video } from '@/features/videoSlice';
import { getPlayTime, getTimeStamp } from '@/utils';
import { PlayIcon, BookmarkIcon } from '@/assets/icons';

interface IBookmarkButton {
  onClick: () => void;
  isAdded: boolean;
}

// props를 인터페이스로 분리해야만 부모에서 자식에게 props 전달할 때 에러 발생 X
// 에러: is not assignable to type 'IntrinsicAttributes
interface Props {
  data: Video;
}

const Card = ({ data }: Props) => {
  console.log(data);

  const [isAdded, setIsAdded] = useState(data.bookmark);

  const dispatch = useDispatch();

  // store depandency가 존재 -> Card의 로직이 딥한 부분 + store 로직이 섞여서 재활용성 낮음
  const handleAddVideo = () => {
    if (isAdded) {
      dispatch(removeVideo({ ...data, bookmark: false }));
      setIsAdded(false);
    }
    if (!isAdded) {
      dispatch(addVideo({ ...data, bookmark: true }));
      setIsAdded(true);
    }
  };

  const handlePlayVideo = () => {
    dispatch(playVideo(data));
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
        <Image src={data.thumbnail}></Image>
        {data.duration && <Duration>{getTimeStamp(getPlayTime(data.duration))}</Duration>}
      </ImageBox>
      <Title>{data.title}</Title>
      <ChannelTitle>{data.channelTitle}</ChannelTitle>
    </Layout>
  );
};

// 비즈니스 로직에 스타일 코드가 과한 부분
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
