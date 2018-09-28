import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';

import { Drone } from './../../../core/model/drone.model';
import { BrandDialogFormComponent } from '../brand-dialog-form/brand-dialog-form.component';

@Component({
  selector: 'app-drone-form',
  templateUrl: './drone-form.component.html',
  styleUrls: ['./drone-form.component.scss']
})
export class DroneFormComponent implements OnInit {

  drone: Drone = new Drone

  constructor(private dialog: MatDialog, public brandService: BrandService) { }

  ngOnInit() {
  }

  onAddBrand() {
    this.dialog.open(BrandDialogFormComponent, {width: '500px', height: '400px'});
  }

}
