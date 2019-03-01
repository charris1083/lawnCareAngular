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


  constructor(private _contractService: ContractsService, private _form: FormBuilder, private _router: Router, private _getClientService: ClientsService,private _getMowerService: MowersService) {
    this.createForm();
  }

  ngOnInit() {
    this._getClientService.getClients().subscribe(res =>{ this.clientSelect = res as Client[]; console.log(this.clientSelect)})
    this._getMowerService.getMowers().subscribe(s => this.mowerSelect = s as Mower[])
  }
  createForm() {
    this.contractForm = this._form.group({
      ClientId: Number, 
      MowerId: Number,
    })
  }
  onSubmit() {
    console.log(this.contractForm.value)
   this._contractService.createContract(this.contractForm.value).subscribe(data => { 
     this._router.navigate(['/contracts' ])
   })
  }

}
