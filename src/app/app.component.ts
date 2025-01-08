import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = 0;
  updateAdd?: number;

  plus(): void {
    this.updateAdd = Date.now();
    this.counter ++;
  }

  minus(): void {
    this.updateAdd = Date.now();
    this.counter --;
  }

  get cannotDecrace(): boolean {
    return this.counter <= 0;
  }

  clear(): void {
    this.updateAdd = Date.now();
    this.counter = 0;
  }
}
