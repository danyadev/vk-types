import { VKAttachmentGeo } from './Geo';
import { VKAttachmentWallReply } from './WallReply';

export interface VKAttachment {
  type?:
    | 'doc' | 'link' | 'poll' | 'wall' | 'call' | 'gift' | 'story' | 'photo' | 'audio' | 'video' | 'event'
    | 'market' | 'artist' | 'sticker' | 'article' | 'podcast' | 'graffiti' | 'wall_reply' | 'audio_message'
    | 'money_request' | 'audio_playlist'

  wall_reply?: VKAttachmentWallReply
}

export {
  VKAttachmentGeo,
  VKAttachmentWallReply
};
