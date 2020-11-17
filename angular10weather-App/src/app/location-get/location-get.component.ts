import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Weather from '../weather';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ConsolidatedWeather from '../consolidatedWeather';

@Component({
  selector: 'app-location-get',
  templateUrl: './location-get.component.html',
  styleUrls: ['./location-get.component.css']
})
export class LocationGetComponent implements OnInit {

  public weathers : any;
  public default: string = "belfast";
  public woeid: Weather[] | undefined;
  // public locations : ConsolidatedWeather[] | undefined;
  public locations: any;
  angForm!: FormGroup;
  constructor(private fb: FormBuilder, private weatherService: WeatherService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      LocationName: ['', Validators.required]      
    });
  }

  ngOnInit(): void {
    this.readWeather(this.default);
  }

  readWeather(query: any): void {
    this.weatherService.readAll(query).subscribe((data: Weather[])=> {
      this.woeid = Object.values(data[0])[2];
      console.log(this.woeid);
      this.findLocation(this.woeid);
    })
  }

  findLocation(woeid: any): void {
    this.weatherService.getLocation(woeid).subscribe((data: ConsolidatedWeather[]) => {
      //Object.values(dthis.locations)[0]
      
      this.locations = Object.values(data)[0]
      console.log(this.locations);
      return this.locations;
    })
  }

}
