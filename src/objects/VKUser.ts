/**
 * NOTE: Описаны только те значения, которые приходят вместе с fields
 * photo_50,photo_100,verified,sex,status,first_name_acc,last_name_acc,online,last_seen,online_info,domain
 */

export interface VKUser {
  id: number
  first_name: string
  first_name_acc: string
  last_name: string
  last_name_acc: string
  deactivated?: 'banned' | 'deleted'
  /**
   * Не приходит при наличии deactivated
   */
  is_closed?: boolean
  /**
   * Не приходит при наличии deactivated
   */
  can_access_closed?: boolean
  /**
   * Пол пользователя
   *
   * 0 - не указан
   *
   * 1 - женский
   *
   * 2 - мужской
   */
  sex: 0 | 1 | 2
  domain: string
  photo_50: string
  photo_100: string
  online: 0 | 1
  online_app?: number
  online_mobile?: 1
  online_info: {
    visible: boolean
    is_online?: true
    last_seen?: number
    is_mobile?: true
    app_id?: number
    status?: 'recently' | 'last_week' | 'last_month' | 'long_ago' | 'now_show'
  }
  last_seen?: {
    time: number
    /**
     * 1 - m.vk.com
     *
     * 2 - VK для iPhone
     *
     * 3 - VK для iPad
     *
     * 4 - VK для Android
     *
     * 5 - VK для Windows Phone
     *
     * 6 - VK для Windows 10
     *
     * 7 - vk.com
     */
    platform: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
  /**
   * Не приходит при наличии deactivated
   */
  status?: string
  /**
   * Не приходит при наличии deactivated
   */
  verified?: 0 | 1
}
