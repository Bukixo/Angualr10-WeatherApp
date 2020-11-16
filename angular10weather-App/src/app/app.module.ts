import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationAddComponent } from './location-add/location-add.component';
import { LocationGetComponent } from './location-get/location-get.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationAddComponent,
    LocationGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
