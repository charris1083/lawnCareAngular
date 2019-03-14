import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ContractsService } from 'src/app/services/contracts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Mower } from 'src/app/models/Mower';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

contract: Contract
  _editContractForm:FormGroup;
  clientSelect: Client[];
  mowerSelect: Mower[];

  constructor(private _form: FormBuilder, private _contractService: ContractsService, private _ar: ActivatedRoute, private _router:Router) {
    this._ar.paramMap.subscribe(p => {
      this._contractService.getContractsById(p.get('id')).subscribe((singleContract: Contract) => {
        this.contract = singleContract;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }

  createForm() {
    this._editContractForm = this._form.group({
      ClientId: new FormControl(this.contract.ClientName),
      MowerId: new FormControl(this.contract.MowerName)
      
    });
  }

}
