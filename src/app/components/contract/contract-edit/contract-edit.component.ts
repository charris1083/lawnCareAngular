import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ContractsService } from 'src/app/services/contracts.service';
import { ClientsService } from 'src/app/services/clients.service';
import { MowersService } from 'src/app/services/mowers.service';
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
  contractForm: FormGroup;
  clientSelect: Client[];
  mowerSelect: Mower[];


  constructor(private _form: FormBuilder, private _contractService: ContractsService, private _ar: ActivatedRoute,  private _router:Router,  private _getClientService: ClientsService,private _getMowerService: MowersService) {
    this._ar.paramMap.subscribe(p => {
      this._contractService.getContractsById(p.get('id')).subscribe((singleContract: Contract) => {
        this.contract = singleContract;
        this.createForm();
      });
    });
   }

  ngOnInit() {
    this._getClientService.getClients().subscribe(res => {this.clientSelect= res as Client[]; console.log(this.clientSelect)})
    this._getMowerService.getMowers().subscribe(s => this.mowerSelect = s as Mower[])
  }

  createForm() {
    this.contractForm = this._form.group({
      ClientId: new FormControl(this.contract.ClientId),
      MowerId: new FormControl(this.contract.MowerId)
      
    });
  }
  onSubmit(form) {
    const editContract: Contract = {
      ContractId: form.value.ContractId,
      ClientId: form.value.ClientId,
      MowerId: form.value.MowerId
    }
    this._contractService.updateContract(editContract).subscribe(d => {
      this._router.navigate(['/contracts']);
    });
  }

}
