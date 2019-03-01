import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { Client } from '../../../models/client';
import { DataSource } from '@angular/cdk/collections';
//import { Observables } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  clients: Client[];
  columnNames = ['details', 'ClientId', 'ClientName', 'ClientCity', 'ClientNeeds', 'buttons'];
  dataSource: MatTableDataSource<Client>

  constructor(private _clientService: ClientsService) { }

  ngOnInit() {
    this._clientService.getClientsById("").subscribe((clients: Client[]) =>{
      this.clients = clients
      this.dataSource = new MatTableDataSource<Client>(clients);
       });
  }

}
