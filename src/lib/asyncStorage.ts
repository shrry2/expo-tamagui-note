import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
};

export const getData = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const getAllData = async () => {
  const allKeys = await AsyncStorage.getAllKeys();
  const allData = await AsyncStorage.multiGet(allKeys);
  return allData.map(([_key, value]) => (value ? JSON.parse(value) : null));
};

export const getStorageKey = (noteId: string) => `note-${noteId}`;
