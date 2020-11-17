import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Weather from '../weather';
import ConsolidatedWeather from '../consolidatedWeather';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location-get',
  templateUrl: './location-get.component.html',
  styleUrls: ['./location-get.component.css']
})
export class LocationGetComponent implements OnInit {

  public weathers : any;
  public locationName!: string;
  public default: string = "belfast";
  public woeid: Weather[] | undefined;
  public locations: any;
  constructor(private weatherService: WeatherService, private toastr: ToastrService) { 
  }
  ngOnInit(): void {
    this.readWeather(this.default);
    this.locationName = "Belfast";
  }

  receiveMessage($event: any) {
    this.locationName = $event;
    this.readWeather(this.locationName);
  }

  showError(locationName: any) {
    this.toastr.error(locationName, 'is not a valid city, please select a diffent');
  }

  readWeather(locationName: any): void {
    this.weatherService.readAll(locationName).subscribe((data: Weather[])=> {
      //if (data.length > 0) {
        this.woeid = Object.values(data[0])[2];
        console.log(this.woeid);
        this.findLocation(this.woeid);
      //}
      //this.showError(locationName) // The api doesnt update when you add a non valid city as we need to extract the
      //woeid to find the location's weatherso I tried to add validation that if the array comes back empty with the invalid
      //city, the throw the error.
    });
  }

  findLocation(woeid: any): void {
    this.weatherService.getLocation(woeid).subscribe((data: ConsolidatedWeather[]) => {
      this.locations = Object.values(data)[0]
      console.log(this.locations);
      return this.locations;
    })
  }

}
