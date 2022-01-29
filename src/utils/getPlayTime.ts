const getPlayTime = (value: string): number => {
  return value
    .split(/PT|H|M|S/)
    .filter((x) => x) // 빈 배열 값 제거
    .reverse()
    .map(Number) // str -> num
    .reduce((total, x, i) => total + x * 60 ** i);
};

export default getPlayTime;
