import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet],
  template: `
    <div class="public-layout">
      <router-outlet/>
    </div>
  `,
})
export class PublicLayoutComponent {}
