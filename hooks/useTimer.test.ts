import { act, renderHook } from '@testing-library/react-hooks'

import useTimer from './useTimer'

describe('useTimer', () => {
  jest.useFakeTimers()

  it('should return initial time', () => {
    const { result } = renderHook(() => useTimer(0))
    expect(result.current).toBe(0)
  })

  it('should increment time by 1 every second', () => {
    const { result } = renderHook(() => useTimer(0))

    act(() => {
      jest.advanceTimersByTime(1000) // Wait for 1 second
    })

    expect(result.current).toBe(1)

    act(() => {
      jest.advanceTimersByTime(2000) // Wait for 2 more seconds
    })

    expect(result.current).toBe(3)
  })

  it('should clear interval on unmount', () => {
    const { unmount } = renderHook(() => useTimer(0))
    unmount()

    expect(clearInterval).toHaveBeenCalledTimes(1)
  })
})
