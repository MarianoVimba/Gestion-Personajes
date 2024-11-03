import { Personaje } from './../type/personaje';
import {  HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  http = inject(HttpClient);
  baseURL = 'http://localhost:3000/personajes';

  getPersonaje(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.baseURL);
  }

  getPersonajeById(id: string | null): Observable<Personaje>{
    return this.http.get<Personaje>(`${this.baseURL}/${id}`);
  }

  postPersonaje(personaje: Personaje):Observable<Personaje>{
    return this.http.post<Personaje>(this.baseURL,personaje);
  }

  deletePersonaje(id: string | undefined): Observable<Personaje>{
    return this.http.delete<Personaje>(`${this.baseURL}/${id}`);
  }

  updatePersonaje(id:string | null, personaje:Personaje): Observable<Personaje>{
    return this.http.patch<Personaje>(`${this.baseURL}/${id}`,personaje);
  }
}
