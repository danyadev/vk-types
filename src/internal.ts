import {
  VKKeyboard, VKInlineKeyboard,
  VKConversation, VKConversationAcl,
  VKMessageTemplate, VKMessageAction
} from '.';
import { VKAttachment } from './attachments';

/**
 * Описание используемых версий объекта беседы и сообщения в VK Desktop
 * Такие объекты генерируются в методах parseConversation и parseMessage
 * https://github.com/danyadev/vk-desktop/blob/master/src/js/messages.js
 */

export interface IParsedConversation {
  id: number
  isChannel: boolean
  isCasperChat: boolean
  members: number | null
  left: boolean
  muted: boolean
  unread: number
  photo: string | null
  title: string | null
  isWriteAllowed: boolean
  keyboard: VKKeyboard | null
  last_msg_id: number
  in_read: number
  out_read: number
  mentions: number[]
  pinnedMsg: IParsedMessage | null
  acl: VKConversationAcl | null
  chatState: VKConversation['chat_settings']['state'] | null
  owner_id: number | null
  admin_ids: number[] | null
  loaded: true
}

export interface IParsedMessage {
  id: number | null
  from: number
  out: boolean
  text: string
  date: number
  peer_id: number
  conversation_msg_id: number
  random_id: number
  action: VKMessageAction | null
  hasAttachment: boolean
  fwdCount: number
  fwdMessages: IParsedMessage[]
  attachments: Omit<VKAttachment, 'type'>
  hasReplyMsg: boolean
  replyMsg: IParsedMessage | null
  keyboard: VKInlineKeyboard | null
  hasTemplate: boolean
  template: VKMessageTemplate | null
  hidden: boolean
  editTime: number
  was_listened: boolean
  isContentDeleted: boolean
  expireTtl: number
  isExpired: boolean
  fromLongPoll: boolean
}
