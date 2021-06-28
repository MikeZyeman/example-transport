import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private http: HttpClient) { }

  getConnection(from: string, to: string): Observable<any> {
    return this.http.get(`api/connections?from=${from}&to=${to}`)
  }


}
