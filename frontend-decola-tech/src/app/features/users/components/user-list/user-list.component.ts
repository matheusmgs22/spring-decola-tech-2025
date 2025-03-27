import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';
import { User } from '../../../../core/models/user.model';
import { UserCardComponent } from "../../../../shared/components/user-card/user-card.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [];
  isLoading = true;
  toastService: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading users', err);
        this.isLoading = false;
      }
    });
  }

  deleteUser(id: number) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.isLoading = true;
      this.apiService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id);
          this.toastService.show({
            message: 'Usuário excluído com sucesso!',
            type: 'success'
          });
          this.isLoading = false;
        },
        error: (err) => {
          this.toastService.show({
            message: 'Erro ao excluir usuário',
            type: 'error'
          });
          this.isLoading = false;
        }
      });
    }
  }
}
