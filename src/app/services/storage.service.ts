import { Injectable, signal } from '@angular/core';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly _storage = localStorage;
  private readonly _userId = signal<string>('user');

  get<T>(key: string): T | null {
    const value = this._storage.getItem(key);
    if (!value) return null;

    return JSON.parse(value) as T;
  }

  set<T>(key: string, value: T) {
    this._storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    this._storage.removeItem(key);
  }

  getUserId() {
    const dataUser: User | null = this.get<User>(this._userId());
    return dataUser?.id as number;
  }
}
