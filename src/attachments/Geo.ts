export interface VKAttachmentGeo {
  /**
   * Тип местоположения
   */
  type: 'point'
  /**
   * Координаты местоположения в широте (latitude) и долготе (longitude)
   */
  coordinates: {
    latitude: number
    longitude: number
  }
  /**
   * Описание местоположения
   */
  place?: {
    /**
     * Страна
     */
    country: string
    /**
     * Город
     */
    city: string
    /**
     * "{Город}, {Страна}"
     *
     * Пример: "Новочебоксарск, Россия"
     */
    title: string
  }
}
