import { Component, OnInit } from '@angular/core';
import {CovidService} from "../../service/covid-service.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-covid-component',
  templateUrl: './covid-component.component.html',
  styleUrls: ['./covid-component.component.css']
})
export class CovidComponent implements OnInit {
  public allData: any;
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getAllData().subscribe(
      (data: any) => {
        this.allData = data;
        console.log(this.allData);
      },
      (err: HttpErrorResponse) =>{
        console.log(err.error.message);
      }
    )
  }

}
