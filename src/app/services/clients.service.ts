import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

const ApiUrl = 'http://localhost:50171'

@Injectable()


export class ClientsService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getClients(): Observable<Client[]> {
    return this._http.get<Client[]>(`${ApiUrl}/api/Client/`, {headers: this.getHeaders() }); 
  }
  postClients(client: Client) {
    return this._http.post(`${ApiUrl}/api/Client/`, {headers: this.getHeaders() }); 
  }
  
  getClient(id: string) {
    return this._http.get(`${ApiUrl}api/Client/${id}`, { headers: this.getHeaders() });
  }

  createClients(client: Client) {
    return this._http.post(`${ApiUrl}/api/Client`, client, {headers: this.getHeaders()})
  }
  
  updateClient(client: Client) {
    return this._http.put(`${ApiUrl}/api/Client`, client, {headers: this.getHeaders() });
  }
  deleteClient(id: number) {
    return this._http.delete(`${ApiUrl}api/Client/${id}`, {headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
