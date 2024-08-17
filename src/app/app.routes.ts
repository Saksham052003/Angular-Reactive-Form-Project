import { Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';

export const appRoutes: Routes = [
  { path: '', component: FormPageComponent },
  { path: 'display', component: DisplayPageComponent }
];
