import { VKAttachmentGeo } from './Geo';
import { VKAttachmentWall } from './Wall';
import { VKAttachmentWallReply } from './WallReply';

export interface VKAttachment {
  /**
   * Подробнее: https://github.com/danyadev/longpoll-doc#вложения
   */
  type?:
    | 'doc' | 'link' | 'poll' | 'wall' | 'call' | 'gift' | 'story' | 'photo' | 'audio' | 'video' | 'event'
    | 'market' | 'artist' | 'sticker' | 'article' | 'podcast' | 'graffiti' | 'mini_app' | 'wall_reply'
    | 'audio_message' | 'money_request' | 'audio_playlist' | 'group_call_in_progress'

  wall?: VKAttachmentWall
  wall_reply?: VKAttachmentWallReply
}

export {
  VKAttachmentGeo,
  VKAttachmentWall,
  VKAttachmentWallReply
};
