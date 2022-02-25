import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Video } from '@/features/store.types';

import { PlayIcon, XIcon } from '@/assets/icons';
import { removeVideo } from '@/features/playListSlice';
import { setVideo } from '@/features/playerSlice';

interface ImageProps {
  isPlaying: boolean;
}

interface PlayIconBoxProps {
  isPlaying: boolean;
}

// props를 인터페이스로 분리해야만 부모에서 자식에게 props 전달할 때 에러 발생 X
// 에러: is not assignable to type 'IntrinsicAttributes
interface Props {
  video: Video;
}

const PlayListCard = ({ video }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

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

const Layout = styled.div`
  display: flex;
  padding: 0.3rem 0;
  cursor: pointer;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Image = styled.img<ImageProps>`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;

  ${(props) =>
    props.isPlaying &&
    css`
      filter: opacity(25%);
    `}
`;

const PlayIconBox = styled.button<PlayIconBoxProps>`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  transform: translate(-50%, -50%);

  background-color: transparent;
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }

  ${(props) =>
    !props.isPlaying &&
    css`
      visibility: hidden;
    `}
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-left: 0.5rem;
`;

const Info = styled.div``;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

export default PlayListCard;
