import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contract } from '../models/contract';
import { Mower } from '../models/Mower';
import { Client } from '../models/Client';

const ApiUrl = 'http://localhost:50171';
@Injectable()
export class ContractsService {

  constructor(private _http: HttpClient) { }
  getContracts() {
    return this._http.get(`${ApiUrl}/api/Contract/`, {headers: this.getHeaders() })
  }
  getContractsById(id: string) {
    return this._http.get(`${ApiUrl}/api/Contract/${id}`, {headers: this.getHeaders() }); 
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  createContract(contract: Contract) {
    return this._http.post(`${ApiUrl}/api/Contract`, contract, {headers: this.getHeaders()})
  }
  
  updateContract(contract: Contract) {
    return this._http.put(`${ApiUrl}/api/Contract`, contract, {headers: this.getHeaders() });
  }
}
