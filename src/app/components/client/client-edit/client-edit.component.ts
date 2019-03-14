import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client : Client;
  form : any;

   _editClientForm: FormGroup;
  constructor(private _form: FormBuilder,private _clientService: ClientsService,private _ar: ActivatedRoute,private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._clientService.getClient(p.get('id')).subscribe((singleClient: Client) => {
          this.client = singleClient;
          this.createForm();
        });
      });
     }

  ngOnInit() {
  }

  createForm() {
    this._editClientForm = this._form.group({
      ClientId: new FormControl(this.client.ClientId),
      ClientName: new FormControl(this.client.ClientName),
      ClientCity: new FormControl(this.client.ClientCity),
      ClientNeeds: new FormControl(this.client.ClientNeeds)
    });
  }

  onSubmit(form) {
    const updateClient: Client = {
      ClientId: form.value.ClientId,
      ClientName: form.value.ClientName,
      ClientCity: form.value.ClientCity,
      ClientNeeds: form.value.ClientNeeds
    };
    this._clientService.updateClient(updateClient).subscribe(d => {
      this._router.navigate(['/clients']);
    });
  }

}
