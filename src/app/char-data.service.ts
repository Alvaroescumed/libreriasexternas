import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor( private http: HttpClient) { }

  // realizamos una peticion Get a la API para traer los datos de los usuarios
  getCharData(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/users`)
  }
}
