import { useEffect, useState } from 'react'

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [initialTime])

  return time
}

export default useTimer
