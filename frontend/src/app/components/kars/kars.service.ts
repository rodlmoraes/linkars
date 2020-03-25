import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

export interface Kar {
  _id: String;
  vehicle: String;
  brand: String;
  year: Number;
  description: String;
}

@Injectable()
export class KarsService {
  constructor(private http: HttpClient) { }

  getKars(): Observable<[Kar]> {
    return this.http.get(API_URL + '/kars') as Observable<[Kar]>;
  }

  getKar(id): Observable<Kar> {
    return this.http.get(
      API_URL + '/kars/' + id
    ) as Observable<Kar>;
  }

  createKar(kar): Observable<Kar> {
    return this.http.post(API_URL + '/kars', kar) as Observable<Kar>;
  }

  updateKar(kar: Kar): Observable<Kar> {
    return this.http.put(API_URL + '/kars/' + kar._id, kar) as Observable<Kar>;
  }

  saveKar(kar): Observable<Kar> {
    return this.http.patch(API_URL + '/kars/' + kar._id, kar) as Observable<Kar>;
  }

  deleteKar(id): Observable<Kar> {
    return this.http.delete(API_URL + '/kars/' + id) as Observable<Kar>;
  }

  searchKars(q): Observable<[Kar]> {
    return this.http.get(API_URL + '/search?q=' + q) as Observable<[Kar]>;
  }
}
