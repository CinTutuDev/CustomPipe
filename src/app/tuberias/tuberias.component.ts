import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.scss'],
})
export class TuberiasComponent {
  pi: number = 3.141592;
  myNumber: number = 122.89654777;
  text: string = 'Holita mundito bonito';
  sliceArray = ['casa', 'perro', 'papel', 'estuche', 'radio'];
  sliceArrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  price: number = 3.456;
  today: number = Date.now();

  constructor() {
    // Llama a registerLocaleData dentro del constructor
    registerLocaleData(localeEs, 'es');
  }
}
