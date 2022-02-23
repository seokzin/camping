import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { playVideo, addVideo, removeVideo, Video } from '@/features/videoSlice';
import { getPlayTime, getTimeStamp } from '@/utils';
import { PlayIcon, XIcon, BookmarkIcon } from '@/assets/icons';

interface IBookmarkButton {
  onClick: () => void;
  isAdded: boolean;
}

// props를 인터페이스로 분리해야만 부모에서 자식에게 props 전달할 때 에러 발생 X
// 에러: is not assignable to type 'IntrinsicAttributes
interface Props {
  video: Video;
}

const PlayListCard = ({ video }: Props) => {
  const [isAdded, setIsAdded] = useState(video.bookmark);

  const dispatch = useDispatch();

  // store depandency가 존재 -> Card의 로직이 딥한 부분 + store 로직이 섞여서 재활용성 낮음
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
    dispatch(playVideo(video));
  };

  return (
    <Layout>
      <ImageBox>
        <PlayButton>
          <PlayIcon />
        </PlayButton>
        <Image src={video.thumbnail}></Image>
      </ImageBox>

      <InfoBox>
        <Info>
          <Title>{video.title}</Title>
          <ChannelTitle>{video.channelTitle}</ChannelTitle>
        </Info>
        <DeleteButton>
          <XIcon />
        </DeleteButton>
      </InfoBox>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  padding: 0.3rem 0;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  transform: translate(-50%, -50%);

  background-color: transparent;
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;

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

export default PlayListCard;
