import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mower } from '../models/Mower'

const ApiUrl = 'http://localhost:50171';

@Injectable()


export class MowersService {

  constructor(private _http: HttpClient) { }
  getMowers() {
    return this._http.get(`${ApiUrl}/api/Mower/`, {headers: this.getHeaders() })
  }
  getMowersById(id: string) {
    return this._http.get(`${ApiUrl}/api/Mower/${id}`, {headers: this.getHeaders() }); 
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  createMower(mower: Mower) {
    return this._http.post(`${ApiUrl}/api/Mower`, mower, {headers: this.getHeaders()})
  }
  
  updateMower(mower: Mower) {
    return this._http.put(`${ApiUrl}/api/Mower`, mower, {headers: this.getHeaders() });
  }

  deleteMower(id: number) {
    return this._http.delete(`${ApiUrl}/mowers/${id}`, { headers: this.getHeaders() });
  }
}

