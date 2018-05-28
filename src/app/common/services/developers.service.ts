import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Developers} from '../developers';
// import * as developers from './developers.json';

const BASE_URL = 'assets/developers.json';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Developers[]>(BASE_URL);
  }
}
