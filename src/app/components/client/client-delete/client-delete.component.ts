import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  
public client:Client;
clientId: any;

  constructor(private _clientService: ClientsService,private _ar: ActivatedRoute,private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._clientService.getClientsById('').subscribe((singleClient: Client) => {
        this.client = singleClient; 
      });
    })
  }

  ngOnInit() {
  }

  onDelete() {
    this._clientService.deleteClient(this.clientId).subscribe(deleted => {
      this._router.navigate(['/clients']);
    })
  }

}
