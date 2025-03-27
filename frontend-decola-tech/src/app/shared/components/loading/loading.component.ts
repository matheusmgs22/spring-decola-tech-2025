import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay" *ngIf="visible">
      <div class="loading-spinner"></div>
      <p class="loading-message">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() visible: boolean = false;
  @Input() message: string = 'Carregando...';
}
