export const formatTime2Ymd = (time: string): string => {
  return time.slice(0, 4) + '/' + time.slice(5, 7) + '/' + time.slice(8, 10)
}
