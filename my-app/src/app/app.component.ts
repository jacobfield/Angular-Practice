import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  // templateUrl: './app.component.html',
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="../assets/logo.png"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
