import { PhysicalAttributes } from './../../../core/model/subtypes/physical-attributes';
import { RangedAttribute } from './../../../core/model/subtypes/ranged-attribute';
import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';

import { Drone } from './../../../core/model/drone.model';
import { CategoryService } from '../../../core/service/category.service';

import { BrandDialogFormComponent } from '../basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { CategoryDialogFormComponent } from '../basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { RcTypeService } from '../../../core/service/rcType.Service';
import { ValuableAttributeDialogFormComponent } from '../basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';
import { CameraPhotoService } from './../../../core/service/cameraPhoto.Service';
import { CameraVideoService } from '../../../core/service/cameraVideo.Service';
import { BatteryService } from './../../../core/service/battery.Service';

@Component({
  selector: 'app-drone-form',
  templateUrl: './drone-form.component.html',
  styleUrls: ['./drone-form.component.scss']
})
export class DroneFormComponent implements OnInit {

  drone: Drone = new Drone

  constructor(private dialog: MatDialog,
    public brandService: BrandService,
    public categoryService: CategoryService,
    public rcTypeService: RcTypeService,
    public cameraPhotoService: CameraPhotoService,
    public cameraVideoService: CameraVideoService,
    public batteryService: BatteryService) { }

  ngOnInit() {

  }

  onAddBrand() {
    this.dialog.open(BrandDialogFormComponent, { width: '500px', height: '350px' });
  }

  onAddCategory() {
    this.dialog.open(CategoryDialogFormComponent, { width: '500px', height: '220px' });
  }

  onAddRcType() {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {service: this.rcTypeService}, width: '500px', height: '270px' });
  }

  onAddCameraPhoto() {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {service: this.cameraPhotoService}, width: '500px', height: '270px' });
  }

  onAddCameraVideo() {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {service: this.cameraVideoService}, width: '500px', height: '270px' });
  }

  onAddBattery() {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {service: this.batteryService}, width: '500px', height: '270px' });
  }

}
