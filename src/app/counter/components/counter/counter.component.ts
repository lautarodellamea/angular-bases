import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <b>Counter: {{ counter }}</b>
    <br />

    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(10)">+10</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 0;
  }
}
