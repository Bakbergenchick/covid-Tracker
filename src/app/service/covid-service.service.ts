import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  public covidAPI = environment.covidAPI;

  constructor(private http: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.http.get<any>(this.covidAPI);
  }
}
