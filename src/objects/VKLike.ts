export interface VKLike {
  /**
   * Количество лайков
   */
  count: number
  /**
   * Лайкнул ли пользователь объект
   */
  user_likes: 0 | 1
  /**
   * Может ли пользователь лайкнуть оьъект
   */
  can_like: 0 | 1
  /**
   * Указывает, что комментарий можно репостнуть
   */
  can_publish?: 1 | true
}
