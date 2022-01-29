import React from 'react';
import styled from 'styled-components';

interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

interface IButton {
  themeMode: string;
}

const Toggle = ({ themeMode, toggleTheme }: IToggle) => {
  return (
    <Button onClick={toggleTheme} themeMode={themeMode}>
      {themeMode === 'dark' ? '🌞' : '🌙'}
    </Button>
  );
};

const Button = styled.button<IButton>`
  position: absolute;
  top: calc(50% - 406px);
  left: calc(50% + 187.5px);
  transform: translate(-50%, -50%);

  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.mode.mainColor};
  border: none;
  border-radius: 50%;

  box-shadow: 0px 1px 4px #00000099;

  cursor: pointer;
`;

export default Toggle;
