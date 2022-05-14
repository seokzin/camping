import styled from 'styled-components';

interface BookmarkButtonProps {
  onClick: () => void;
  isAdded: boolean;
}

export const Layout = styled.div`
  margin-bottom: 2rem;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;

  border-radius: 0.5rem;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.5rem;
  right: 3rem;

  width: 2rem;
  height: 2rem;

  border: none;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};

  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

export const BookmarkButton = styled.button<BookmarkButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  width: 2rem;
  height: 2rem;

  border: none;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};

  cursor: pointer;

  svg {
    fill: ${(props) => (props.isAdded ? ({ theme }) => theme.mode.mainText : 'none')};
  }
`;

export const Duration = styled.p`
  overflow: hidden;

  position: absolute;
  bottom: 0.5rem;
  right: 0.2rem;

  padding: 0.3rem;

  border-radius: 0.3rem;

  background-color: #00000077;

  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Title = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;

  margin-top: 0.3rem;

  color: ${({ theme }) => theme.mode.mainText};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  color: ${({ theme }) => theme.mode.subText};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
