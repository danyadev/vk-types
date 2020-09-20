import { VKConversation, VKGroup, VKMessage, VKUser } from '..';

/**
 * Возвращает ID отправленного сообщения
 */
export type MessagesSend = number;

export interface MessagesSendParams {
  user_id?: number
  random_id: number
  peer_id?: number
  domain?: string
  chat_id?: number
  message?: string
  lat?: number
  long?: number
  attachment?: string
  reply_to?: number
  forward_messages?: string
  sticker_id?: number
  // TODO
  keyboard?: any
  // TODO
  template?: any
  // TODO
  payload?: any
  dont_parse_links?: 0 | 1
  disable_mentions?: 0 | 1
  // TODO
  intent?: any
  // TODO
  subscribe_id?: number
  // type
  // expire_ttl
  // silent
}

/** ********************************************************************************************* */

export type MessagesDelete = 1;

export interface MessagesDeleteParams {
  message_id?: number
  message_ids?: number | string
  spam?: 0 | 1
  delete_for_all?: 0 | 1
}

/** ********************************************************************************************* */

export interface MessagesGetConversationsById {
  count: number
  items: VKConversation[]
  profiles?: VKUser[]
  groups?: VKGroup[]
}

export interface MessagesGetConversationsByIdParams {
  peer_ids: number | string
  extended?: 0 | 1
  fields?: string
}

/** ********************************************************************************************* */

export interface MessagesGetConversationMembers {
  count: number

  items: {
    member_id: number
    /**
     * Приходит только администраторам беседы
     */
    can_kick?: boolean
    /**
     * Не приходит в личных сообщениях
     *
     * Если пользователь вступил в чат по ссылке, то в этом поле придет ID создателя беседы
     */
    invited_by?: number
    /**
     * Не приходит в личных сообщениях
     */
    join_date?: number
    /**
     * Приходит только администраторам беседы
     */
    is_admin?: true
    /**
     * Приходит только создателям беседы
     */
    is_owner?: true
  }[]

  profiles: VKUser[]
  /**
   * Приходит только при наличии сообществ в списке участников
   */
  groups?: VKGroup[]
}

export interface MessagesGetConversationMembersParams {
  peer_id: number
  fields?: string
}

/** ********************************************************************************************* */

export interface MessagesGetLongPollServer {
  server: string
  key: string
  ts: number
  /**
   * Приходит только при указании need_pts в запросе
   */
  pts?: number
}

export interface MessagesGetLongPollServerParams {
  /**
   * Технически он не имеет никакого значения при вызове этого метода,
   * ведь версия указывается при каждом запросе к LongPoll.
   *
   * Принимает любое положительные число.
   */
  lp_version?: number
  /**
   * Нужен для возвращения pts, который нужен для получения истории событий
   * начиная с определенного момента.
   */
  need_pts?: 0 | 1
}

/** ********************************************************************************************* */

export interface MessagesGetLongPollHistory {
  history: any[]
  messages: {
    count: number
    items: VKMessage[]
  }
  conversations: VKConversation[]
  credentials?: MessagesGetLongPollServer
  new_pts: number
  from_pts: number
  /**
   * Возвращается, если был превышен один из лимитов, указанный в параметрах
   * events_limit и msgs_limit.
   */
  more?: true
  /**
   * Возвращается, если есть хоть один пользователь в списке.
   */
  profiles?: VKUser[]
  /**
   * Возвращается, если есть хоть одно сообщество в списке.
   */
  groups?: VKGroup[]
}

export interface MessagesGetLongPollHistoryParams {
  /**
   * ID последнего известного события. Возвращается в методе
   * messages.getLongPollServer и в ответе с самого сервера.
   *
   * Обязательный параметр, если не передавать pts.
   *
   * Если указывать ts вместо pts, то максимум метод сможет вернуть 256 последних событий.
   * Если же событий пришло больше, то вернется Internal Server Error.
   *
   * Метод вернет все события, которые произошли после этого события.
   */
  ts?: number
  /**
   * ID последнего известного события. Возвращается в методе
   * messages.getLongPollServer при указании need_pts: 1
   * и в ответе с самого сервера, если в mode указать флаг 32.
   *
   * Отличается от ts тем, что pts не увеличивается, если приходит 8 или 9 событие
   * (онлайн/оффлайн пользователя). Такие события попросту не сохраняются в базе ВК.
   *
   * При его указании лимита в 256 событий уже нет.
   */
  pts?: number
  fields?: string
  /**
   * Максимальное количество возвращаемых событий.
   *
   * Минимум 1000, по умолчанию так же 1000.
   */
  events_limit?: number
  /**
   * Максимальное количество возвращаемых сообщений.
   *
   * Лимиты events_limit и msgs_limit суммируются: вернутся события, которые ограничены
   * первым достигнутым лимитом.
   *
   * Минимум 200, по умолчанию так же 200.
   */
  msgs_limit?: number
  /**
   * ID последнего сообщения, которое сохранено в приложении.
   *
   * При его указании возвращаются события, пришедшие после написания указанного сообщения.
   */
  max_msg_id?: number
  /**
   * Используемая версия LongPoll.
   */
  lp_version?: number
  /**
   * Количество последних событий, которое необходимо вернуть.
   *
   * Если есть 30 новых событий, а last_n указан как 10, то вернутся самые новые 10 событий.
   */
  last_n?: number
  /**
   * Возвращать дополнительное поле credentials, которе будет содержать в себе результат метода
   * messages.getLongPollServer с need_pts: 1.
   *
   * По умолчанию 0.
   */
  credentials?: 0 | 1
}

/** ********************************************************************************************* */

export interface MessagesGetById {
  count: number
  items: VKMessage[]
  /**
   * Приходит только при extended: 1 и при наличии самих профилей
   */
  profiles?: VKUser[]
  /**
   * Приходит только при extended: 1 и при наличии самих сообществ
   */
  groups?: VKGroup[]
}

export interface MessagesGetByIdParams {
  message_ids: number | string
  extended?: 0 | 1
  fields?: string
}
