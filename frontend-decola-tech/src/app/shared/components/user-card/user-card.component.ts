import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>Conta: {{ user.account.number }}</p>
      <div class="actions">
        <a [routerLink]="['/users', user.id]" class="btn">Detalhes</a>
      </div>
    </div>
  `,
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User;
}
