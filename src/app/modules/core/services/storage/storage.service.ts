import { Injectable } from '@angular/core';

/**
 * A service for handling local and session storage operations.
 * This service provides methods to set, get, remove, and clear items
 * from both localStorage and sessionStorage.
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * Saves an item to the localStorage.
   * @param key - The key under which the value will be stored.
   * @param value - The value to be stored (can be any type, will be serialized to JSON).
   */
  setLocalItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves an item from the localStorage.
   * @param key - The key under which the value is stored.
   * @returns The parsed value from localStorage, or null if the item does not exist.
   */
  getLocalItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  /**
   * Removes an item from the localStorage.
   * @param key - The key of the item to be removed.
   */
  removeLocalItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all items from the localStorage.
   */
  clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * Saves an item to the sessionStorage.
   * @param key - The key under which the value will be stored.
   * @param value - The value to be stored (can be any type, will be serialized to JSON).
   */
  setSessionItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves an item from the sessionStorage.
   * @param key - The key under which the value is stored.
   * @returns The parsed value from sessionStorage, or null if the item does not exist.
   */
  getSessionItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  /**
   * Removes an item from the sessionStorage.
   * @param key - The key of the item to be removed.
   */
  removeSessionItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  /**
   * Clears all items from the sessionStorage.
   */
  clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
