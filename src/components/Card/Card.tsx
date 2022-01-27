import React from 'react';
import styled from 'styled-components';

const Card = (data: any) => {
  const movie = {
    videoId: data.data.id.videoId,
    title: data.data.snippet.title,
    thumbnail: data.data.snippet.thumbnails.medium.url,
  };

  return (
    <Layout>
      <Image src={movie.thumbnail} />
      {/* <p>{movie.videoId}</p> */}
      <Title>{movie.title}</Title>
    </Layout>
  );
};

const Layout = styled.div``;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 100%;
`;

export default Card;
