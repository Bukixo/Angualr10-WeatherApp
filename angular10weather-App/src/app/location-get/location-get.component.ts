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
  public test: Weather[] | undefined;
  public consolidatedWeather : ConsolidatedWeather[] | undefined;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.readWeather();
  }

  readWeather(): void {
    this.weatherService.readAll().subscribe((data: Weather[])=> {
      this.test = Object.values(data[0])[2];
      console.log(this.test);
      this.findLocation(this.test);
    })
  }

  findLocation(woeid: any): void {
    this.weatherService.getLocation(woeid).subscribe((data: ConsolidatedWeather[]) => {
      this.consolidatedWeather = data;
      console.log(this.consolidatedWeather);
    })
  }

}
