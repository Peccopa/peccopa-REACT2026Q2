export const storage = {
  get<T>(key: string, fallback: T): T {
    const item = localStorage.getItem(key);
    if (!item) return fallback;

    return JSON.parse(item);
  },

  set<T>(key: string, value: T): void {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },
};
