import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://76mzq40ax7.execute-api.us-east-2.amazonaws.com/yk-p-angular1/test';
  

  constructor(private http: HttpClient) { }

  createPost(id:string, message: string): Observable<any> {
    return this.http.post(this.apiUrl, { id, message });
  }
}