const getTimeStamp = (value: number) =>
  new Date(value * 1000).toISOString().slice(11, 19)

export default getTimeStamp
