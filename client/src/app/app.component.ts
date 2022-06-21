import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  private _url: string = "http://localhost:3001/api/anime";

  data: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get(this._url).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }


}
