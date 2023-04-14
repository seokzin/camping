import { useTimer } from '@/hooks'

const Timer = () => {
  const time = useTimer()

  return <div>{time}</div>
}

export default Timer
