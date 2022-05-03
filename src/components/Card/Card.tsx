import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '@/app/store';
import type { Video } from '@/features/store.types';
import { getPlayTime, getTimeStamp } from '@/utils';
import { PlayIcon, BookmarkIcon } from '@/assets/icons';
import { addVideo, removeVideo } from '@/features/playListSlice';
import { setVideo } from '@/features/player/playerSlice';

interface BookmarkButtonProps {
  onClick: () => void;
  isAdded: boolean;
}

// props를 인터페이스로 분리해야만 부모에서 자식에게 props 전달할 때 에러 발생 X
// 에러: is not assignable to type 'IntrinsicAttributes
interface Props {
  video: Video;
}

const Card = ({ video }: Props) => {
  const [isAdded, setIsAdded] = useState(video.bookmark);

  const dispatch = useAppDispatch();

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

const BookmarkButton = styled.button<BookmarkButtonProps>`
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
