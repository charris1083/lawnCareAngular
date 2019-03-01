import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';

const ApiUrl = 'http://localhost:50171'

@Injectable()


export class ClientsService {

  constructor(private _http: HttpClient) { }

  getClients() {
    return this._http.get(`${ApiUrl}/api/clientService/`, {headers: this.getHeaders() }); 
  }
  getClientsById(id: string) {
    return this._http.get(`${ApiUrl}/api/ClientService/${id}`, {headers: this.getHeaders() }); 
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  createClient(client: Client) {
    return this._http.post(`${ApiUrl}/api/clientService`, client, {headers: this.getHeaders()})
  }

  updateClient(client: Client) {
    return this._http.put(`${ApiUrl}/api/clientService`, client, {headers: this.getHeaders() });
  }
  deleteClient(id: number) {
    return this._http.delete(`${ApiUrl}/ClientService/${id}`, {headers: this.getHeaders() });
  }
}
