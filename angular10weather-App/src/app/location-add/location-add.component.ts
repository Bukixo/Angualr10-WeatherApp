import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import Weather from '../weather';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {
  angForm!: FormGroup;
  constructor( private fb: FormBuilder, private weatherService: WeatherService, private router: Router) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
       LocationName: ['', Validators.required]
     });
   }

   @Output() messageEvent = new EventEmitter<string>();

   sendMessage(value: string) {
    this.messageEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
