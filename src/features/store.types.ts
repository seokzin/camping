export interface Video {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  bookmark: boolean;
}

export interface YoutubeResponse {
  kind: string;
  etag: string;
  id: SearchResponseId;
  snippet: Snippet;
  contentDetails: ContentDetails;
}

interface SearchResponseId {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  publishTime?: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
}

interface Localized {
  title: string;
  description: string;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: RegionRestriction;
  contentRating: ContentRating;
  projection: string;
}

interface RegionRestriction {
  allowed: string[];
}

interface ContentRating {
  [key: string]: string;
}
