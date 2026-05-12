import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    },[key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;