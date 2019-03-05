import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private _clientService: ClientsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.clientForm = this._form.group({
      ClientName: new FormControl,
      ClientCity: new FormControl,
      ClientNeeds: new FormControl
    });

  }
      onSubmit() {
        this._clientService.createClients(this.clientForm.value).subscribe(data => {
          this._router.navigate(['/clients']);
        });
      }
}
