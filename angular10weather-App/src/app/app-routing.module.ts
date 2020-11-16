import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationGetComponent } from './location-get/location-get.component';
import { LocationAddComponent } from './location-add/location-add.component';

const routes: Routes = [
  {
  path: 'weather',
  component: LocationGetComponent
  },
  {
    path: 'weather/find-location',
    component: LocationAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
