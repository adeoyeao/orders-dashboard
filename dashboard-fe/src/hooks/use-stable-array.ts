import {useRef} from 'react' 

export const useStableArray = (arr: string[]) => {
  const ref = useRef<string[]>(arr);

  if (
    ref.current.length !== arr.length ||
    ref.current.some((v, i) => v !== arr[i])
  ) {
    ref.current = arr;
  }

  return ref.current;
};
