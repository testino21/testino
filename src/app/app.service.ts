import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) {}
   /** fetching cards from the local server */ 
  getCards(): Observable<any> {
  return  this.httpClient.get("http://localhost:3000/deals");
  }
}
