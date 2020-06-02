import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/menu';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get('https://fakerestapi.azurewebsites.net/api/Authors');
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('https://fakerestapi.azurewebsites.net/api/Authors');
  }

  getSuperHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay(2000)
    );
  }


}
