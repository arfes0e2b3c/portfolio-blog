import { fetchTalkAndEventList } from '@/api/talkAndEvents'
import { TalkAndEventResponse } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TalkAndEventResponse>
) {
  const list = await fetchTalkAndEventList()
  res.status(200).json(list)
}

