import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="display-container">
      <h2>Submitted Data</h2>
      <div *ngIf="formData">
        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Age:</strong> {{ formData.age }}</p>
        <p><strong>Address:</strong></p>
        <ul>
          <li>Street: {{ formData.address.street }}</li>
          <li>City: {{ formData.address.city }}</li>
          <li>Postal Code: {{ formData.address.postalCode }}</li>
        </ul>
      </div>
      <button (click)="goBack()" class="refresh-button">Go Back to Form</button>
    </div>
  `,
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent {
  formData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras.state?.['formData'];
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
