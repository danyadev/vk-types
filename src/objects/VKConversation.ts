import { VKMessage, VKKeyboard } from '.';

export interface VKConversation {
  peer: {
    id: number
    type: 'user' | 'chat' | 'group' | 'email'
    local_id: number
  }

  last_message_id: number
  in_read: number
  out_read: number

  sort_id: {
    major_id: 0
    /**
     * ID последнего сообщения в чате.
     * Сохраняется даже после исчезновения всех сообщений в фантомном чате,
     * чего нельзя сказать про поле last_message_id.
     */
    minor_id: number
  }

  /**
   * Не приходит при отсутствии непрочитанных сообщений.
   */
  unread_count?: number
  /**
   * Помечено ли сообщение как непрочитанное.
   *
   * Сохраняет свое состояние при написании сообщений другими пользователями.
   */
  is_marked_unread: boolean
  /**
   * На данный момент назначение этого поля неизвестно.
   */
  important: false
  /**
   * Массив с ID сообщений, где содержится пуш или ответ на сообщение.
   *
   * Не приходит при отсутствии напоминаний.
   */
  mentions?: number[]

  current_keyboard?: VKKeyboard

  push_settings?: {
    disabled_until?: number
    disabled_forever?: true
    no_sound?: true
  }

  can_write: {
    allowed: boolean
    reason?: number
  }

  /**
   * TODO Когда не приходит?
   */
  chat_settings?: {
    owner_id: number
    title: string
    state: 'in' | 'left' | 'kicked'

    acl: VKConversationAcl
    /**
     * TODO Когда не приходит?
     */
    members_count?: number
    /**
     * TODO Когда не приходит?
     */
    pinned_message?: VKMessage

    /**
     * TODO Когда не приходит?
     */
    photo?: {
      photo_50: string
      photo_100: string
      photo_200: string
    }

    /**
     * TODO Когда не приходит?
     */
    admin_ids?: number[]
    active_ids: number[]

    is_group_channel?: true

    is_disappearing: boolean
    disappearing_chat_link?: string
    theme?: 'orange'

    /**
     * TODO Что оно делает?
     */
    is_service: boolean
  }
}

// TODO описание
export interface VKConversationAcl {
  can_change_info: boolean
  can_change_invite_link: boolean
  can_change_pin: boolean
  can_invite: boolean
  can_promote_users: boolean
  can_see_invite_link: boolean
  can_moderate: boolean
  can_copy_chat: boolean
  can_call: boolean
  can_use_mass_mentions: boolean
  can_change_service_type: boolean
}
