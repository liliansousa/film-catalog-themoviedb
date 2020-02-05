import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemoviedbService } from './services/themoviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-themoviedb';

  constructor(
    private apiConnect: HttpClient,
    private movieDBService: ThemoviedbService
  ) { }
}
