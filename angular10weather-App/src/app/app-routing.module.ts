import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationGetComponent } from './location-get/location-get.component';

const routes: Routes = [
  {
  path: 'weather',
  component: LocationGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
