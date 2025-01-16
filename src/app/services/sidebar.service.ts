import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

   // Inicializamos como true para que esté abierto por defecto
   private _isOpen = signal(false);
   isOpen = this._isOpen.asReadonly();
 
   toggle(): void {
     this._isOpen.update(value => !value);
   }
}
