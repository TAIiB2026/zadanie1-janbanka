import { Component, computed, effect, Input, signal } from '@angular/core';

@Component({
  selector: 'app-plant',
  standalone: false,
  templateUrl: './plant.component.html',
  styles: ``
})
export class PlantComponent {
  @Input() plant?: string;
  wilgotnosc = signal(0);
  maxWilgotnosc: number = 100;

  komunikat = computed(() => {
    if(this.wilgotnosc() < 40) {
      return 'Roślina ma za sucho';
    } else if(this.wilgotnosc() > 80) {
      return 'Roślina ma za mokro';
    }
    else {
      return "Roślina ma odpowiednią wilgotność"
    }
  });

  podniesWilgotnosc() {
    if (this.wilgotnosc() < this.maxWilgotnosc) {
      this.wilgotnosc.update((value) => value + 10);
    }
  }
}
