import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  create(reclamation: Object): Observable<Object> {
    return this.http.post(this.SERVER_URL + '/reclamation/', reclamation);
  }
}
