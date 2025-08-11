import { TalkAndEventResponse } from '@/types'

export const UseFetchTalkAndEvents = async (): Promise<TalkAndEventResponse> => {
  const res = await fetch('/api/talk-and-events/list')
  return res.json()
}

