import { VKAttachmentGeo } from './Geo';

export interface VKAttachment {
  type?:
    | 'geo' | 'doc' | 'link' | 'poll' | 'wall' | 'call' | 'gift' | 'story' | 'photo' | 'audio' | 'video' | 'event'
    | 'market' | 'artist' | 'sticker' | 'article' | 'podcast' | 'graffiti' | 'wall_reply' | 'audio_message'
    | 'money_request' | 'audio_playlist'

  geo?: VKAttachmentGeo
}

export { VKAttachmentGeo };
