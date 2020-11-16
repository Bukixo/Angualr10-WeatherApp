import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {
  angForm!: FormGroup;
  constructor( private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
       LocationName: ['', Validators.required]
     });
   }

  ngOnInit(): void {
  }

}
