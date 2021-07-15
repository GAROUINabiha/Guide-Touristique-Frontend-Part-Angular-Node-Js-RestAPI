import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }
  getAllComment(): Observable<any> {
    return this.http.get<any>( this.SERVER_URL + '/comment', {
    });
      }
      create(id: number, pseudo:String, message : String): Observable<{ message: string }>  {
        return this.http.post<{ message: string }>(this.SERVER_URL + '/comment/'+ id + '/' + pseudo + '/' + message, onmessage);
      }
}
