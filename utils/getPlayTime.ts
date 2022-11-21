const getPlayTime = (value: string) => {
  return value
    .split(/PT|H|M|S/)
    .filter((x) => x)
    .reverse()
    .map(Number)
    .reduce((total, x, i) => total + x * 60 ** i)
}

export default getPlayTime
