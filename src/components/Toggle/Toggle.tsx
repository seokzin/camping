import { ToggleButton } from './Toggle.styled';

interface ToggleProps {
  themeMode: string;
  toggleTheme: () => void;
}

const Toggle = ({ themeMode, toggleTheme }: ToggleProps) => {
  return (
    <ToggleButton onClick={toggleTheme} themeMode={themeMode}>
      {themeMode === 'dark' ? '🌞' : '🌙'}
    </ToggleButton>
  );
};

export default Toggle;
