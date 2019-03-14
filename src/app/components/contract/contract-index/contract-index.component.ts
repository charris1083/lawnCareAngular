import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../../services/contracts.service';
import { Contract } from '../../../models/Contract';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-contract-index',
  templateUrl: './contract-index.component.html',
  styleUrls: ['./contract-index.component.css']
})
export class ContractIndexComponent implements OnInit {

  contracts: Contract[];
  columnNames = ['details', 'ContractId', 'ClientId','MowerId', 'buttons']
  dataSource: MatTableDataSource<Contract>

  constructor(private _contractService: ContractsService) { }

  ngOnInit() {
    this._contractService.getContractsById("").subscribe((contracts: Contract[]) =>{
      this.contracts = contracts
      this.dataSource = new MatTableDataSource<Contract>(contracts);
    });
  }

}
