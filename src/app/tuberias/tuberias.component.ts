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
  text: string = 'Holita mundito bonito';
  price: number = 3.456;
  today: number = Date.now();

  constructor() {
    // Llama a registerLocaleData dentro del constructor
    registerLocaleData(localeEs, 'es');
  }
}
