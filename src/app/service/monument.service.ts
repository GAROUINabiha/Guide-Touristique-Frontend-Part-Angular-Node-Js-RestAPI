import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Monument} from 'src/app/models/monument.model';
@Injectable({
  providedIn: 'root'
})
export class MonumentService {
  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) {

  }
  getAllMonument(): Observable<any> {
    return this.http.get<any>( this.SERVER_URL + '/monument', {
    });
      }

  /* GET SINGLE PRODUCT FROM SERVER*/
  getSingle(id: number): Observable<Monument> {
    return this.http.get<Monument>(this.SERVER_URL + '/monuments/' + id);
  }
  deletem(id: number): Observable<any> {
    return this.http.delete(this.SERVER_URL + '/monument/' + id, { responseType: 'text' });
  }

  create(monument: Object): Observable<Object> {
    return this.http.post(this.SERVER_URL + '/monument/', monument);
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.put(this.SERVER_URL + '/monument/' + id, value);
  }


}
