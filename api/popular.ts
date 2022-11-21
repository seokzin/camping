import { Youtube } from './../types/youtube'
import youtube from './youtube'

export const getPopular = async () => {
  const response = await youtube.get('/videos', {
    params: {
      part: 'snippet, contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // music category
    },
  })

  return response.data.items.map((item: Youtube) => {
    return {
      id: item.id,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.medium.url,
      duration: item.contentDetails.duration,
      bookmark: false,
    }
  })
}
