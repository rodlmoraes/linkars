import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

interface User {
  _id: number;
  email: string;
}

const API_URL = environment.apiUrl;

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<User> {
    return this.http.post(API_URL + '/login', credentials) as Observable<User>;
  }
}
