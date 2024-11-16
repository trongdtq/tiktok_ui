import { useState, useEffect } from 'react';

/**
 *  useDebounce() là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi.
 *   Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận
 *    duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
 *
 */
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
