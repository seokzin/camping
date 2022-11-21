export interface Video {
  id: string
  title: string
  channelTitle: string
  thumbnail: string
  duration: string
  bookmark: boolean
}

export interface Youtube {
  kind: string
  etag: string
  id: YoutubeSearchResponseId
  snippet: YoutubeSnippet
  contentDetails: YoutubeContentDetails
}

interface YoutubeSearchResponseId {
  kind: string
  videoId: string
}

interface YoutubeSnippet {
  publishedAt: string
  publishTime?: string
  channelId: string
  title: string
  description: string
  thumbnails: YoutubeSnippetThumbnails
  channelTitle: string
  tags?: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: YoutubeSnippetLocalized
}

interface YoutubeSnippetLocalized {
  title: string
  description: string
}

interface YoutubeSnippetThumbnails {
  default: YoutubeSnippetThumbnail
  medium: YoutubeSnippetThumbnail
  high: YoutubeSnippetThumbnail
  standard: YoutubeSnippetThumbnail
  maxres: YoutubeSnippetThumbnail
}

interface YoutubeSnippetThumbnail {
  url: string
  width: number
  height: number
}

interface YoutubeContentDetails {
  duration: string
  dimension: string
  definition: string
  caption: string
  licensedContent: boolean
  regionRestriction: RegionRestriction
  contentRating: ContentRating
  projection: string
}

interface RegionRestriction {
  allowed: string[]
}

interface ContentRating {
  [key: string]: string
}
