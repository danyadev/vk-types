import { VKAttachment } from '.';
import { VKLike } from '../objects';

interface WallSource {
  type: 'vk' | 'api' | 'widget' | 'rss' | 'sms'
  platform?: string
  url?: string
  data?: string
}

export interface VKAttachmentWall {
  /**
   * ID поста
   */
  id: number
  /**
   * ID автора поста
   */
  from_id: number
  /**
   * ID профиля, где написан этот пост
   */
  to_id: number
  /**
   * Дата создания поста
   */
  date: number
  /**
   * Тип поста
   */
  post_type: 'post'
  /**
   * Текст поста
   */
  text: string
  /**
   * Репост записи
   */
  copy_history: {
    id: number
    owner_id: number
    from_id: number
    date: number
    post_type: 'post'
    text: string
    attachments?: VKAttachment[]
    post_source: WallSource
  }[]
  /**
   * Указывает, что пост можно отредактировать
   */
  can_edit?: 1
  /**
   * Автор поста
   *
   * Приходит только с can_edit: 1
   */
  created_by?: number
  /**
   * Указывает, что пост можно удалить
   */
  can_delete?: 1
  /**
   * Является ли пост рекламным
   */
  marked_as_ads: 0 | 1
  /**
   * Каким образом был отправлен пост
   */
  post_source: WallSource
  comments: {
    /**
     * Количество комментариев
     */
    count: number
    /**
     * Можно ли писать комментарии
     */
    can_post: 0 | 1
    /**
     * Указывает, что комментарий можно написать от имени группы
     */
    groups_can_post?: true
  }
  likes: VKLike
  reposts: {
    /**
     * Общее количество репостов
     */
    count: number

    wall_count: number
    mail_count: number

    /**
     * Репостнул ли пользователь запись
     */
    user_reposted: 0 | 1
  }
  /**
   * Количество просмотров записи
   */
  views: { count: number }
  /**
   * Добавлена ли запись в избранные
   */
  is_favorite: boolean
  /**
   * Ключ доступа
   */
  access_key: string

  short_text_rate: 0.8
  carousel_offset: 0
}
