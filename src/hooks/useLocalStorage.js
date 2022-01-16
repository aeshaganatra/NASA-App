import { useState, useEffect } from "react";

const useLocalStorage = (key, initialVal) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialVal
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;