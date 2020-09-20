import { VKUser, VKGroup, VKConversation, VKMessage, VKConversationPushSettings } from '..';
import { MessagesGetLongPollServer } from './messages';
import { AccountGetCounters } from './account';

/**
 * Описание всех execute-методов VK Desktop
 */

export interface ExecuteInit {
  user: VKUser
  counters: AccountGetCounters
  pinnedPeers: {
    peer: VKConversation
    msg: VKMessage
  }[]
  profiles: VKUser[]
  groups: VKGroup[]
  lp: MessagesGetLongPollServer
  temporarilyDisabledNotifications: VKConversationPushSettings[]
  firstConversations: {
    conversation: VKConversation
    /**
     * Не приходит, когда это фантомный чат и все сообщения уже исчезли
     */
    last_message?: VKMessage
  }[]
}

export interface ExecuteInitParams {
  lp_version: number
  fields?: string
}

/** ********************************************************************************************* */

export type ExecuteGetProfiles = (VKUser | VKGroup)[];

export interface ExecuteGetProfilesParams {
  profile_ids: number | string
  fields?: string
  func_v: 2
}

/** ********************************************************************************************* */

export interface ExecuteGetLastMessage {
  conversation: VKConversation
  message: VKMessage | null
}

export interface ExecuteGetLastMessageParams {
  peer_id: number
  func_v: 2
}
