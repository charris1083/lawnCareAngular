import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractsService } from 'src/app/services/contracts.service';
import { Contract } from 'src/app/models/Contract';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
contract: Contract;

  constructor(private _ar: ActivatedRoute, private _contractService: ContractsService) { }

  ngOnInit() {
    this._ar.paramMap.subscribe(routeData => {
      this._contractService.getContractsById(routeData.get('id')).subscribe((singleContract: Contract) => {
        this.contract = singleContract;

        
      });
    });
  
  }

}
