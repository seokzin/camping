import { Youtube } from './../types/youtube'
import youtube from './youtube'

export const getSearch = async (term: string) => {
  const searchResult = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: term,
      maxResults: 10,
      regionCode: 'KR',
    },
  })

  const PromiseArrayResult = searchResult.data.items.map(
    async (item: Youtube) => {
      const response = await youtube.get('/videos', {
        params: {
          part: 'snippet, contentDetails',
          id: item.id.videoId,
        },
      })

      const videoData: Youtube = response.data.items[0]

      return {
        id: videoData.id,
        title: videoData.snippet.title,
        channelTitle: videoData.snippet.channelTitle,
        thumbnail: videoData.snippet.thumbnails.medium.url,
        duration: videoData.contentDetails.duration,
        bookmark: false,
      }
    },
  )

  return Promise.all(PromiseArrayResult)
}
