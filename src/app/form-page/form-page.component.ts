import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name:</label>
          <input id="name" formControlName="name" />
          <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched" class="error-message">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" formControlName="email" />
          <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched" class="error-message">
            <div *ngIf="form.get('email')?.errors?.['required']">Email is required</div>
            <div *ngIf="form.get('email')?.errors?.['email']">Invalid email address</div>
          </div>
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input id="age" type="number" formControlName="age" />
          <div *ngIf="form.get('age')?.invalid && form.get('age')?.touched" class="error-message">
            <div *ngIf="form.get('age')?.errors?.['required']">Age is required</div>
            <div *ngIf="form.get('age')?.errors?.['min']">Age must be at least 18</div>
          </div>
        </div>

        <div formGroupName="address" class="form-group">
          <label for="street">Street:</label>
          <input id="street" formControlName="street" />
          <label for="city">City:</label>
          <input id="city" formControlName="city" />
          <label for="postalCode">Postal Code:</label>
          <input id="postalCode" formControlName="postalCode" />
        </div>

        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/display'], { state: { formData: this.form.value } });
    }
  }
}
