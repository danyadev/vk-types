export interface VKGroup {
  id: number
  name: string
  screen_name: string
  is_closed: 0 | 1
  type: 'group' | 'page' | 'event'
  is_admin: 0 | 1
  is_member: 0 | 1
  is_advertiser: 0 | 1
  deactivated?: 'deleted' | 'banned'
  /**
   * Не приходит при наличии deactivated
   */
  verified?: 0 | 1
  /**
   * Не приходит при наличии deactivated
   */
  status?: string
  photo_50: string
  photo_100: string
}
