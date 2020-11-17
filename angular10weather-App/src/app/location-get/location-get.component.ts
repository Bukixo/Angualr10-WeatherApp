import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import Weather from '../weather';
import ConsolidatedWeather from '../consolidatedWeather';

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
  constructor(private weatherService: WeatherService) { 
  }
  ngOnInit(): void {
    this.readWeather(this.default);
    this.locationName = "Belfast";
  }

  receiveMessage($event: any) {
    this.locationName = $event;
    this.readWeather(this.locationName);
  }

  readWeather(locationName: any): void {
    this.weatherService.readAll(locationName).subscribe((data: Weather[])=> {
      this.woeid = Object.values(data[0])[2];
      console.log(this.woeid);
      this.findLocation(this.woeid);
    })
  }

  findLocation(woeid: any): void {
    this.weatherService.getLocation(woeid).subscribe((data: ConsolidatedWeather[]) => {
      this.locations = Object.values(data)[0]
      console.log(this.locations);
      return this.locations;
    })
  }

}
