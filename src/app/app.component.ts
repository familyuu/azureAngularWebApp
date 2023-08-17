import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  value = 'World';
  response: any;

  constructor(private http: HttpClient) {}

  test_click() {
    this.http.get<any>('https://api.publicapis.org/entries').subscribe(
      (res) => {
        this.response = res;
      },
      (error) => {
        this.response = error.message ? error.message : "Error"
      }
    );
  }
}
