import React from 'react';
import styled from 'styled-components';

const Card = (data: any) => {
  const movie = {
    videoId: data.data.id.videoId,
    title: data.data.snippet.title,
    channelTitle: data.data.snippet.channelTitle,
    thumbnail: data.data.snippet.thumbnails.medium.url,
  };

  return (
    <Layout>
      <Image src={movie.thumbnail} />
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

const Image = styled.img`
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
`;

export default Card;
