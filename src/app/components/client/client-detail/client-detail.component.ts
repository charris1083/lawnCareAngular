import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
client:Client;
  constructor(private _activatedRoute: ActivatedRoute, private _clientService: ClientsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._clientService.getClientsById(routeData.get('id')).subscribe((singleClient: Client)=> {
        this.client = singleClient;
      })
    })
  }

}
