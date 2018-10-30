import { AdminHomeComponent } from './../admin-home/admin-home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from '../../../core/service/category.service';

import { BrandDialogFormComponent } from '../basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { CategoryDialogFormComponent } from '../basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { ValuableAttributeDialogFormComponent } from '../basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';
import { ValuableAttributeService } from './../../../core/service/valuable-attribute.Service';
import { DroneService } from './../../../core/service/drone.service';

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
    public valuableAttributeService: ValuableAttributeService,
    private droneService: DroneService) { }

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
        cameraVideo: [''],
        gimbal: ['']
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

  onAddValuableAttribute(path: string) {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {path: path}, width: '500px', height: '270px' });
  }

  cancel() {
    this.formDrone.reset()
  }

  saveDrone() {
    this.drone = {...this.basic.value,
                  ...this.reference.value,
                  ...this.features.value,
                  ...this.accessories.value,
                  ...this.powerAutonomy.value,
                  ...this.pricing.value,
                  videos: this.drone.videos,
                  photos: this.drone.pictures,
                  reviews: this.drone.reviews}
    this.droneService.insertDrone(this.drone);
  }

}
