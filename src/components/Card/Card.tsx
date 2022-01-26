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
      <p>{movie.videoId}</p>
      <p>{movie.title}</p>
    </Layout>
  );
};

const Layout = styled.div``;

const Image = styled.img``;

export default Card;
