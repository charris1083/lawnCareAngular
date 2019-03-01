import { Component, OnInit } from '@angular/core';
import { MowersService } from 'src/app/services/mowers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mower } from 'src/app/models/Mower';

@Component({
  selector: 'app-mower-delete',
  templateUrl: './mower-delete.component.html',
  styleUrls: ['./mower-delete.component.css']
})
export class MowerDeleteComponent implements OnInit {

  mower: Mower;
  mowerId: any;

  constructor(private _mowerService: MowersService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._mowerService.getMowers().subscribe((singleMower: Mower) => {
        this.mower = singleMower;
      });
    })
   }

  ngOnInit() {
  }

  onDelete() {
    this._mowerService.deleteMower(this.mowerId).subscribe(deleted => {
      this._router.navigate(['/mowers']);
    })
  }

}
