import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  imports: [],
  templateUrl: './standalone.component.html',
  styles: ``,
  standalone: true
})
export class StandaloneComponent {
  items = ['Przedmiot', 'Obiekt', 'Rzecz'];
}
