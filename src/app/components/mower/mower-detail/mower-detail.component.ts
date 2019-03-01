import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mower } from 'src/app/models/mower';
import { MowersService } from 'src/app/services/mowers.service';

@Component({
  selector: 'app-mower-detail',
  templateUrl: './mower-detail.component.html',
  styleUrls: ['./mower-detail.component.css']
})
export class MowerDetailComponent implements OnInit {

  mower: Mower;
  constructor(private _activatedRoute: ActivatedRoute, private _mowerService: MowersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._mowerService.getMowersById(routeData.get('id')).subscribe((singleMower: Mower) => {
        this.mower = singleMower;
      })
    })
  }

}
