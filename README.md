# VK Types

[![npm](https://img.shields.io/npm/v/vk-types)](https://www.npmjs.com/package/vk-types)
[![npm](https://img.shields.io/npm/l/vk-types)](https://github.com/danyadev/vk-types/blob/master/LICENSE)

VK Types - это библиотека с TypeScript типами для работы с API ВКонтакте.

Версия VK API: `5.142`

## Установка

```bash
$ yarn add -D vk-types
```

или

```bash
$ npm i -D vk-types
```

## Использование

Все типы были разделены на 3 раздела:
* `objects` - основные объекты
* `methods` - параметры и ответы методов
* `attachments` - вложения для сообщений

Импортировать нужные типы можно тремя способами:

1. Через глобальный `index.ts`:

```ts
import {
  VKUser,
  MessagesSend,
  MessagesSendParams,
  VKAttachment,
  VKAttachmentWallReply
} from 'vk-types';
```

2. Через `index.ts` в каждом разделе:

```ts
import { VKUser } from 'vk-types/objects';
import { MessagesSend, MessagesSendParams } from 'vk-types/methods';
import { VKAttachment, VKAttachmentWallReply } from 'vk-types/attachments';
```

3. Через сам файл с нужным типом:

```ts
import { VKUser } from 'vk-types/objects/VKUser';
import { MessagesSend, MessagesSendParams } from 'vk-types/methods/messages';
import { VKAttachment } from 'vk-types/attachments';
import { VKAttachmentWallReply } from 'vk-types/attachments/WallReply';
```

## Поддерживаемые типы

На данный момент поддерживается довольно мало типов, но вы всегда можете [помочь нам](#contributing) с их написанием.

### Объекты

[Папка с объектами](https://github.com/danyadev/vk-types/tree/master/src/objects)

- `VKConversation` - беседа
- `VKConversationPushSettings` - настройки уведомлений беседы
- `VKGroup` - сообщество
- `VKImage` - фотография
- `VKKeyboard` - клавиатура
- `VKLike` - лайки
- `VKMessage` - сообщения
- `VKUser` - пользователь

### Методы

[Папка с методами](https://github.com/danyadev/vk-types/tree/master/src/methods)

#### account

- `account.getCounters`
- `account.getPushSettings`

#### messages

- `messages.delete`
- `messages.getById`
- `messages.getConversationMembers`
- `messages.getConversationsById`
- `messages.getLongPollHistory`
- `messages.getLongPollServer`
- `messages.send`

## Вложения

[Папка с вложениями](https://github.com/danyadev/vk-types/tree/master/src/attachments)

- `Geo`
- `Wall`
- `WallReply`

## Contributing

Вы всегда можете помочь проекту: добавить новое поле, изменить его описание или тип, или вовсе
добавить новый объект, метод или вложение.

Сделать это можно, создав [Pull Request](https://github.com/danyadev/vk-types/pulls) в репозитории.
Там мы проверим изменения, возможно внесем некоторые правки и примем их.
