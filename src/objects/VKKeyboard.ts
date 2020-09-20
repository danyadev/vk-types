export interface VKKeyboard {
  author_id: number
  one_time: boolean
  buttons?: VKKeyboardButton[][]
}

export type VKInlineKeyboard = VKKeyboard & { inline: true };

// TODO описать новый тип кнопок
// TODO описание кнопок в комментариях
export interface VKKeyboardButton {
  // default = secondary
  color: 'primary' | 'default' | 'secondary' | 'positive' | 'negative'

  action: {
    type: 'text' | 'location' | 'vkpay' | 'open_app' | 'open_link'
    app_id?: number
    hash?: string
    link?: string
    label?: string
    owner_id?: number
    payload: string
  }
}
