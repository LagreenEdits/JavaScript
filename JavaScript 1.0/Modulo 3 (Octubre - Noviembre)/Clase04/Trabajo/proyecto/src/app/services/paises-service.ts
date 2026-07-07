import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais-interface';

@Injectable({
  providedIn: 'root',
})

export class PaisesService {

  private apiurl = 'https://restcountries.com/v3.1/all?fields=name%2Ccapital%2Cpopulation%2Cflags';

  constructor(private http: HttpClient) {}

  obtenerPaises(): Observable <Pais[]> {
    return this.http.get<Pais[]>(this.apiurl);
  }

}
