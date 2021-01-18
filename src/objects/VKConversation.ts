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
    /**
     * Показывает, на каком месте находится закрепленная беседа.
     *
     * Чем больше число, тем выше находится закрепленная беседа.
     * К примеру, 80 означает, что беседа точно находится на первом месте
     * и закрепленных бесед всего 5.
     *
     * Если закреплены всего 3 беседы, то их major_id будет 48, 32 и 16,
     * если смотреть на них сверху вниз.
     */
    major_id: 0 | 16 | 32 | 48 | 64 | 80
    /**
     * ID последнего сообщения в чате.
     *
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
    disabled_forever?: boolean
    no_sound?: true

    /**
     * Не приходит в лс
     */
    disabled_mentions?: boolean
    /**
     * Не приходит в лс
     */
    disabled_mass_mentions?: boolean
  }

  can_write: {
    allowed: boolean
    reason?: number
  }

  /**
   * Не приходит в лс
   */
  chat_settings?: {
    owner_id: number
    title: string
    state: 'in' | 'left' | 'kicked'

    acl: VKConversationAcl
    /**
     * Не приходит, если пользователь не состоит или исключен из беседы
     */
    members_count?: number
    /**
     * Не приходит, если в беседе нет закрепленного сообщения
     */
    pinned_message?: VKMessage

    /**
     * Не приходит, если у беседы нет аватарки
     */
    photo?: {
      photo_50: string
      photo_100: string
      photo_200: string
      is_default_photo: false
    }

    /**
     * Не приходит, когда администраторов нет.
     *
     * Создатель беседы не считается администратором (для этого есть поле owner_id)
     */
    admin_ids?: number[]
    active_ids: number[]

    is_group_channel?: true

    /**
     * Настройки беседы
     *
     * Приходит только создателям беседы
     *
     * - all: всем участникам беседы
     * - owner_and_admins: создателю и администраторам беседы
     * - owner: только создателю беседы
     */
    permissions?: {
      /**
       * Возможность приглашать людей в беседу
       */
      invite: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность менять аватарку и название беседы
       */
      change_info: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность обновлять закрепленное сообщение
       */
      change_pin: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность использования массовых упоминаний
       */
      use_mass_mentions: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность посмотреть ссылку для приглашения в беседу
       */
      see_invite_link: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность создать групповой звонок
       */
      call: 'all' | 'owner_and_admins' | 'owner'
      /**
       * Возможность устанавливать права администратора
       */
      change_admins: 'owner_and_admins' | 'owner'
    }

    /**
     * Является ли беседа фантомной
     */
    is_disappearing: boolean
    theme?: 'orange'

    /**
     * Неизвестно
     */
    is_service: boolean
  }
}

export interface VKConversationAcl {
  /**
   * Можно ли менять аватарку и название беседы
   */
  can_change_info: boolean
  /**
   * Можно ли сменить ссылку для приглашения в беседу
   */
  can_change_invite_link: boolean
  /**
   * Можно ли обновлять закрепленное сообщение
   */
  can_change_pin: boolean
  /**
   * Можно ли приглашать людей в беседу
   */
  can_invite: boolean
  /**
   * Можно ли давать участникам беседы права администратора
   */
  can_promote_users: boolean
  /**
   * Можно ли увидеть ссылку для приглашения в беседу
   */
  can_see_invite_link: boolean
  /**
   * Можно ли удалять сообщения других участников беседы (т.е. является администратором беседы)
   *
   * Удалять сообщения других администраторов и создателя беседы нельзя
   */
  can_moderate: boolean
  /**
   * Можно ли создать фантомный чат с теми же участниками
   *
   * Доступно как создателю, так и администратору беседы
   */
  can_copy_chat: boolean
  /**
   * Можно ли создавать групповые звонки
   */
  can_call: boolean
  /**
   * Работают ли массовые упоминания в беседе
   */
  can_use_mass_mentions: boolean
  /**
   * Неизвестно
   */
  can_change_service_type: boolean
}
