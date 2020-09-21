import { VKConversationPushSettings } from '../objects';

export interface AccountGetCounters {
  /**
   * Количество запросов в играх
   */
  app_requests?: number
  /**
   * ???
   */
  events?: number
  /**
   * Количество заявок в друзья
   */
  friends?: number
  /**
   * Количество новых рекомендаций друзей
   */
  friends_recommendations?: number
  /**
   * ???
   */
  gifts?: number
  /**
   * Количество приглашений в группы
   */
  groups?: number
  /**
   * ???
   */
  menu_discover_badge?: number
  /**
   * ???
   */
  menu_clips_badge?: number
  /**
   * ???
   */
  menu_superapp_friends_badge?: number
  /**
   * Количество непрочитанных сообщений
   */
  messages?: number
  /**
   * ???
   */
  notes?: number
  /**
   * ???
   */
  notifications?: number
  /**
   * ???
   */
  photos?: number
  /**
   * ???
   */
  sdk?: number
  /**
   * ???
   */
  videos?: number
}

export interface AccountGetCountersParams {
  /**
   * Список счетчиков, которые необходимо вернуть.
   * Названия счетчиков такие же, как и названия их полей в ответе.
   *
   * По умолчанию могут вернуться все счетчики.
   */
  filter?: string
}

/** ********************************************************************************************* */

export interface AccountGetPushSettings {
  disabled: 1
  conversations: {
    count: number
    items: VKConversationPushSettings[]
  }
}

export interface AccountGetPushSettingsParams {
  /**
   * Если у вас есть device_id, который связан с настройками упоминаний, то стоит использовать его.
   *
   * Нужно обязательно передать любое значение (например, число 1), чтобы метод заработал
   */
  device_id: number | string
}
