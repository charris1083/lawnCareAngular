import { Component, OnInit } from '@angular/core';
import { Mower } from 'src/app/models/mower';
import { MowersService } from 'src/app/services/mowers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mower-edit',
  templateUrl: './mower-edit.component.html',
  styleUrls: ['./mower-edit.component.css']
})
export class MowerEditComponent implements OnInit {

mower: Mower;

private _editMowerForm: FormGroup;
  constructor(private _form: FormBuilder, private _mowerService: MowersService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._mowerService.getMowers().subscribe((singleMower: Mower) => {
        this.mower = singleMower;
        this.createForm();
      });
    })
   }

  ngOnInit() {
  }
  createForm() {
    this._editMowerForm = this._form.group({
      MowerId: new FormControl(this.mower.MowerId),
      MowerName: new FormControl(this.mower.MowerName),
      MowerCity: new FormControl(this.mower.MowerCity),
      MowerService: new FormControl(this.mower.MowerService)
    });
  }
      onSubmit(form) {
        const updateMower: Mower = {
          MowerId: form.value.MowerId,
          MowerName: form.value.MowerName,
          MowerCity: form.value.MowerCity,
          MowerService: form.value.MowerService
        };
        this._mowerService.updateMower(updateMower).subscribe(d => {
          this._router.navigate(['/mowers']);
        });
  }

}
