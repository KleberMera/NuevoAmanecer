import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly isOpenSignal = signal(window.innerWidth >= 768);

  isOpen() {
    return this.isOpenSignal();
  }

  toggle() {
    this.isOpenSignal.update(state => !state);
  }

  close() {
    this.isOpenSignal.set(false);
  }

  open() {
    this.isOpenSignal.set(true);
  }
}
