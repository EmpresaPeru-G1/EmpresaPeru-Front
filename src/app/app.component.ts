import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EmpresaPeru-Front';
  list:any = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/v1/client/list').subscribe(response => {
      console.log(response);
      this.list = response;

    });
  }

}
