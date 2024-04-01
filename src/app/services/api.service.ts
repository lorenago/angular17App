import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {}

  public disneyBaseUrl = environment.disneyBaseUrl;

  public filterCharacter(params: any) {
    return this.http.get(`${this.disneyBaseUrl}/character`, params);
  }

  public getAllCharacters() {
    return this.http.get(`${this.disneyBaseUrl}/character`);
  }

  public getOneCharacter(id: string) {
    return this.http.get(`${this.disneyBaseUrl}/character/${id}`);
  }
}
