import { VKImage, VKKeyboardButton, VKInlineKeyboard } from '.';
import { VKAttachment, VKAttachmentGeo } from './attachments';

// TODO Создать отдельные типы для реплая и пересланных сообщений
export interface VKMessage {
  /**
   * ???
   */
  id?: number
  from_id: number
  /**
   * ???
   *
   * Приходит и в messages.getById, и в messages.getHistory
   * (но не приходит, видимо, для пересланных сообщений)
   */
  peer_id?: number
  /**
   * ???
   */
  out?: 0 | 1
  text: string
  date: number
  conversation_message_id: number
  /**
   * ???
   */
  random_id?: number
  geo?: VKAttachmentGeo
  action?: VKMessageAction
  /**
   * ???
   */
  fwd_messages?: VKMessage[]
  attachments: VKAttachment[]
  reply_message?: VKMessage
  keyboard?: VKInlineKeyboard
  template?: VKMessageTemplate
  /**
   * ???
   */
  important?: boolean
  /**
   * ???
   */
  is_hidden?: boolean
  /**
   * ???
   */
  update_time?: number
  /**
   * ???
   */
  deleted?: boolean
  /**
   * ???
   */
  was_listened?: boolean
  /**
   * ???
   */
  ref?: string
  /**
   * ???
   */
  ref_source?: string
  // Число, обозначающее через сколько секунд после отправки сообщения оно исчезнет.
  // Приходит только в обычных беседах или лс
  expire_ttl?: number
  // Число, обозначающее через сколько секунд после отправки сообщения оно исчезнет.
  // Приходит только в фантомных беседах
  ttl?: number
  // Исчезло ли сообщение
  is_expired?: true
}

// chat_id со всеми сервисными сообщениями для тестов: 541
export interface VKMessageAction {
  type:
    | 'chat_create' | 'chat_photo_update' | 'chat_photo_remove' | 'chat_title_update' | 'chat_pin_message'
    | 'chat_unpin_message' | 'chat_invite_user' | 'chat_invite_user_by_link' | 'chat_kick_user' | 'chat_screenshot'
    | 'chat_group_call_started' | 'chat_invite_user_by_call' | 'chat_invite_user_by_call_join_link'
  // chat_create, chat_title_update
  text?: string
  // chat_pin_message
  message?: string
  // chat_pin_message, chat_unpin_message, chat_invite_user, chat_kick_user, chat_screenshot, chat_invite_user_by_call
  member_id?: number
  // chat_pin_message, chat_unpin_message
  conversation_message_id?: number
}

export interface VKMessageTemplate {
  type: 'carousel'
  elements: VKMessageTemplateElement[]
}

interface VKMessageTemplateElement {
  title: string
  action: {
    type: 'open_photo'
  }
  description: string
  photo: VKImage[]
  buttons: VKKeyboardButton[]
}
