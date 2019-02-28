import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { MowersService } from 'src/app/services/mowers.service';

@Component({
  selector: 'app-mower-create',
  templateUrl: './mower-create.component.html',
  styleUrls: ['./mower-create.component.css']
})
export class MowerCreateComponent implements OnInit {

  mowerForm: FormGroup;

  constructor(private _mowerService: MowersService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.mowerForm = this._form.group({
      MowerName: new FormControl,
      MowerCity: new FormControl,
      MowerService: new FormControl
    });
  }
  onSubmit() {
    this._mowerService.createMower(this.mowerForm.value).subscribe(data => {
      this._router.navigate(['/mower']);
    });
  }
}
