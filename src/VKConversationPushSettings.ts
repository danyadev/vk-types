export interface VKConversationPushSettings {
  peer_id: number
  /**
   * Время в unixtime, когда уведомления будут включены
   *
   * Если вернулось значение -1, то уведомления либо включены,
   * либо выключены на неограниченный срок.
   */
  disabled_until: number
  /**
   * Неизвестное значение
   */
  sound: 0 | 1
}
