import { TalkAndEventResponse } from '@/types'
import { initMicroCms } from './axios'

export const fetchTalkAndEventList = async () => {
  const list = await initMicroCms()
    .get<TalkAndEventResponse>('talk-and-events?limit=100')
    .then((res) => res.data)
  return list
}

