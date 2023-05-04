import axios from 'axios'

export const initMicroCms = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_MICROCMS_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_KEY,
    },
  })
}
