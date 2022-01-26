import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  letter-spacing: -0.02rem;
  background-color: #6868AB;
  }

  div {
    background-color: ${({ theme }) => theme.mode.mainColor};
    color: ${({ theme }) => theme.mode.mainText};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.mode.title};
  }
`;

export default Global;