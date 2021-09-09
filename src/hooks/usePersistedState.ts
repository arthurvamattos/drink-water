import { useState, useEffect, Dispatch, SetStateAction } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(initialState);
  const [storagedVerified, setStoragedVerified] = useState(false);

  useEffect(() => {
    async function loadData() {
      const storeged = await AsyncStorage.getItem(
        `@arthurvamattos-drink-water:${key}`
      );
      if (storeged) {
        setState(JSON.parse(storeged));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (storagedVerified) {
      const setItem = async () => {
        await AsyncStorage.setItem(
          `@arthurvamattos-drink-water:${key}`,
          JSON.stringify(state)
        );
      };
      setItem();
    } else {
      const getItem = async () => {
        const storagedValue = await AsyncStorage.getItem(
          `@arthurvamattos-drink-water:${key}`
        );
        if (storagedValue) {
          const parsed = JSON.parse(storagedValue);
          if (parsed.colors) setState(parsed);
        }
      };
      getItem();
      setStoragedVerified(true);
    }
  }, [key, state]);

  return [state, setState];
}
