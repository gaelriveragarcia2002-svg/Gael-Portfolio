import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.css',
  template: `
  <ng-container >
    <router-outlet />
  </ng-container>`
})
export class App {
}
