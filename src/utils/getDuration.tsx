const getDuration = (value: string) => {
  return value.replace('PT', '').replace('H', ':').replace('M', ':').replace('S', '');
};

export default getDuration;
