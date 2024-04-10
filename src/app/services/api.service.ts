import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {}

  public disneyBaseUrl = environment.disneyBaseUrl;
  public storeBaseUrl = environment.storeBaseUrl;

  public getByUrl(url: string) {
    return this.http.get(url);
  }

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////            DISNEY          /////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Params
   *  page: The page number to get. Default: 1
   *  pageSize: The number of items per page. Default: 50
   */
  /* GET characters whose name contains search term */
  searchCharacter(term: string) {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get(`${this.disneyBaseUrl}/character`, options);
  }

  public getAllCharacters() {
    return this.http.get(`${this.disneyBaseUrl}/character`);
  }

  public getOneCharacter(id: string) {
    return this.http.get(`${this.disneyBaseUrl}/character/${id}`);
  }

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////           PRODUCTS         /////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  public getProduct(productId: string = '1'): Observable<any> {
    return this.http.get<any>(`${this.storeBaseUrl}/products/${productId}`);
  }

  public getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.storeBaseUrl}/products`);
  }
}
