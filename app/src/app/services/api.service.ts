import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const apiURL = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get(`${apiURL}/posts`)
  }

  public getPost(id: number): Observable<any> {
    return this.http.get(`${apiURL}/posts/${id}`)
  }
}
