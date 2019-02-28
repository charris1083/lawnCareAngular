import { Component, OnInit } from '@angular/core';
import { MowersService } from '../../../services/mowers.service';
import { Mower } from '../../../models/Mower';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mower-index',
  templateUrl: './mower-index.component.html',
  styleUrls: ['./mower-index.component.css']
})
export class MowerIndexComponent implements OnInit {
  mowers: Mower[];
  columnNames = ['details', 'MowerId', 'MowerName', 'MowerCity', 'MowerService'];
  dataSource: MatTableDataSource<Mower>

  constructor(private _mowerService: MowersService) { }

  ngOnInit() {
    this._mowerService.getMowersById("").subscribe((mowers:Mower[]) =>{
      this.mowers= mowers
      this.dataSource = new MatTableDataSource<Mower>(mowers);
    });
  }

}
