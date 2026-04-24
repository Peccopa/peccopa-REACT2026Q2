import { LS_KEY } from '@/constants';

export function getSearchFromStorage(): string {
  return localStorage.getItem(LS_KEY) || '';
}

export function saveSearchToStorage(value: string): void {
  localStorage.setItem(LS_KEY, value);
}
