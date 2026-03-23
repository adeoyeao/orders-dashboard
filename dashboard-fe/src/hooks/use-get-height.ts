import { useState, useCallback, useEffect } from 'react' 

export const useGetHeight = (element: HTMLElement | null) => {
  const [height, setHeight] = useState<number>() 

  const updateHeight = useCallback(() => {
    if (!element) return
    setHeight(element.getBoundingClientRect().height)
  }, [element])

  useEffect(() => {
    updateHeight()
  }, [element, updateHeight])
  
  return {
    height
  }
}