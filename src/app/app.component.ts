import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  value = 'World';
  status: any;

  constructor(private http: HttpClient) {}

  test_click() {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(
      (res) => {
        this.status = res.status;
      },
      (error) => {
        this.status = error.message ? error.message : "Error"
      }
    );
  }
}
