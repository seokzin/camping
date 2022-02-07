import React from 'react';

interface VideoItemTypes {
  name: string;
}

const PlayListCard = ({ name }: VideoItemTypes) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default PlayListCard;
