import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/components/toast/toast.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToastComponent,
    LoadingComponent,
    HeaderComponent
  ],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <app-loading [visible]="isLoading"></app-loading>
      <app-toast></app-toast>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {
  isLoading = false;
}
