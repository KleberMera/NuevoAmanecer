import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Inicializamos como true para que esté abierto por defecto
  private _isOpen = signal<boolean>(false);
  isOpen = this._isOpen.asReadonly();

  toggle() {
    console.log(this._isOpen());
    console.log(this.isOpen());
    
    
    this._isOpen.update((value) => !value);
    console.log(this._isOpen());
    console.log(this.isOpen());
  }
}
