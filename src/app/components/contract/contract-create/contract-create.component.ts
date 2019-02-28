import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractsService } from 'src/app/services/contracts.service';
import { ClientsService } from 'src/app/services/clients.service';
import { MowersService } from 'src/app/services/mowers.service';
import { Mower } from '../../../models/Mower';
import { Client } from 'src/app/models/client';
@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractForm: FormGroup;
  clientSelect: Client[];
  mowerSelect: Mower[];


  constructor(private _contractService: ContractsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.contractForm = this._form.group({
      CustomerId: Number,
      MowerId: Number,
    })
  }

}
