import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
   uri = 'https://www.metaweather.com/api/location/search/?query=';
   locationUri = 'https://www.metaweather.com/api/location';

  constructor(private http: HttpClient) { }

  

  getLocation(query: any): Observable<any> {
    console.log(`${this.uri}/${query}/`);
    return this.http.get(`${this.locationUri}/${query}/`);
  }

  readAll(query: any): Observable<any> {
    return this.http.get(`${this.uri}${query}`);
  }


}
