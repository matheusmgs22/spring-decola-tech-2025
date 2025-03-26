import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  form: FormGroup;
  isEditMode = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: [''],
      account: this.fb.group({
        number: [''],
        agency: ['']
      }),
      card: this.fb.group({
        number: [''],
        limit: [0]
      })
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.userId = +params['id'];
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(id: number) {
    this.apiService.getUser(id).subscribe(user => {
      this.form.patchValue(user);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const operation = this.isEditMode && this.userId
        ? this.apiService.updateUser(this.userId, this.form.value)
        : this.apiService.createUser(this.form.value);

      operation.subscribe({
        next: () => this.router.navigate(['/users']),
        error: (err) => console.error('Error saving user', err)
      });
    }
  }
}
