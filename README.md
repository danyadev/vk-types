# VK Types

VK Types - это библиотека исключительно с TypeScript типами для работы с API ВКонтакте.

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

Существует три способа импорта нужных типов:

1. Через глобальный `index.ts`:
```ts
import { VKUser, MessagesSend, MessagesSendParams, VKAttachment, VKAttachmentWallReply } from 'vk-types';
```

2. Через `index.ts` в каждом разделе:
```ts
import { VKUser } from 'vk-types/objects';
import { MessagesSend, MessagesSendParams } from 'vk-types/methods';
import { VKAttachment, VKAttachmentWallReply } from 'vk-types/attachments';
```

3. Напрямую сам файл (в нем может быть несколько экспортов):
```ts
import { VKUser } from 'vk-types/objects/VKUser';
import { MessagesSend, MessagesSendParams } from 'vk-types/methods/messages';
import { VKAttachment } from 'vk-types/attachments';
import { VKAttachmentWallReply } from 'vk-types/attachments/WallReply';
```
