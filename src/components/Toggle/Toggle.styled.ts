import styled from 'styled-components';

interface ToggleButtonProps {
  themeMode: string;
}

export const ToggleButton = styled.button<ToggleButtonProps>`
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
