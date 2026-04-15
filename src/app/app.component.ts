import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  // plant = 'Aloes';
  plants = ['Aloes', 'Kaktus', 'Róża', 'Tulipan', 'Słonecznik'];
}
