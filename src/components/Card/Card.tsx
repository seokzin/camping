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

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export default Card;
