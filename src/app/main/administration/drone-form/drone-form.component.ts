import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../../core/service/category.service';

import { BrandDialogFormComponent } from '../basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { CategoryDialogFormComponent } from '../basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { RcTypeService } from '../../../core/service/rcType.Service';
import { ValuableAttributeDialogFormComponent } from '../basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';
import { CameraPhotoService } from './../../../core/service/cameraPhoto.Service';
import { CameraVideoService } from '../../../core/service/cameraVideo.Service';
import { BatteryService } from './../../../core/service/battery.Service';
import { Drone } from 'src/app/core/model/drone.model';

@Component({
  selector: 'app-drone-form',
  templateUrl: './drone-form.component.html',
  styleUrls: ['./drone-form.component.scss']
})
export class DroneFormComponent implements OnInit {
  drone: Drone = new Drone()

  formDrone: FormGroup
  basic: FormGroup
  reference: FormGroup
  features: FormGroup
  accessories: FormGroup
  powerAutonomy: FormGroup
  pricing: FormGroup
  media: FormGroup

  constructor(private dialog: MatDialog,
    private FormBuilder: FormBuilder,
    public brandService: BrandService,
    public categoryService: CategoryService,
    public rcTypeService: RcTypeService,
    public cameraPhotoService: CameraPhotoService,
    public cameraVideoService: CameraVideoService,
    public batteryService: BatteryService) { }

  ngOnInit() {
    let fb = this.FormBuilder
    this.formDrone = fb.group({
      basic: fb.group({
        model: ['', Validators.required],
        brand: ['', Validators.required],
        category: ['', Validators.required]
      }),
      reference: fb.group({
        pictureURL: ['', Validators.compose([Validators.required])], // TODO Add URL Validator
        productURL: [''], // TODO Add URL Validator
        releaseDate: ['']
      }),
      features: fb.group({
        gpsPosition: [''],
        altitudeHold: [''],
        physical: fb.group({
          width: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          height: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          length: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          weight: ['', Validators.compose([Validators.required, Validators.pattern("\\d+\\.?\\d*")])]
        })
      }),
      accessories: fb.group({
        rcType: [''],
        cameraPhoto: [''],
        cameraVideo: ['']
      }),
      powerAutonomy: fb.group({
        battery: ['', Validators.required],
        chargeTime: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])],
        flightTime: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])],
        flightMaximunDistance: ['', Validators.compose([Validators.required, Validators.pattern("\\d+")])]
      }),
      pricing: fb.group({
          min: ['', Validators.compose([Validators.required, Validators.pattern("\\d+\\.\\d{2}")])],
          max: ['', Validators.compose([Validators.required, Validators.pattern("\\d+\\.\\d{2}")])]
      })
    })

    this.basic = this.formDrone.get('basic') as FormGroup
    this.reference = this.formDrone.get('reference') as FormGroup
    this.features = this.formDrone.get('features') as FormGroup
    this.accessories = this.formDrone.get('accessories') as FormGroup
    this.powerAutonomy = this.formDrone.get('powerAutonomy') as FormGroup
    this.pricing = this.formDrone.get('pricing') as FormGroup
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

  onTest() {
    console.log(this.formDrone.value)
  }

  cancel() {

  }

  saveDrone() {
    console.log(this.formDrone.valid)
  }

}
