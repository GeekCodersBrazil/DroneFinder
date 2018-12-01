import { AdminHomeComponent } from './../admin-home/admin-home.component';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit, Input, Inject } from '@angular/core';

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
  drone: Drone = new Drone

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
    private droneService: DroneService,
    @Inject(MAT_DIALOG_DATA) public data: Drone, public dialogRef: MatDialogRef<BrandDialogFormComponent>) {
    if (data != undefined) {
      this.drone = data
    }
  }

  ngOnInit() {
    let fb = this.FormBuilder
    this.formDrone = fb.group({
      basic: fb.group({
        model: [this.drone.model, Validators.required],
        brand: [null, Validators.required],
        category: [this.drone.category, Validators.required]
      }),
      reference: fb.group({
        pictureURL: [this.drone.pictureURL, Validators.compose([Validators.required])], // TODO Add URL Validator
        productURL: [this.drone.productURL], // TODO Add URL Validator
        releaseDate: [this.drone.releaseDate == undefined ? null : this.drone.releaseDate.toDate()]
      }),
      features: fb.group({
        gpsPosition: [this.drone.gpsPosition],
        altitudeHold: [this.drone.altitudeHold],
        physical: fb.group({
          width: [this.drone.physical.width, Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          height: [this.drone.physical.height, Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          length: [this.drone.physical.length, Validators.compose([Validators.required, Validators.pattern("\\d+")])],
          weight: [this.drone.physical.weight, Validators.compose([Validators.required, Validators.pattern("\\d+\\.?\\d*")])]
        })
      }),
      accessories: fb.group({
        rcType: [null],
        cameraPhoto: [null],
        cameraVideo: [null],
        gimbal: [null]
      }),
      powerAutonomy: fb.group({
        battery: [null, Validators.required],
        ammountBatteries: [this.drone.ammountBatteries, Validators.required],
        chargeTime: [this.drone.chargeTime, Validators.compose([Validators.required, Validators.pattern("\\d+")])],
        flightTime: [this.drone.flightTime, Validators.compose([Validators.required, Validators.pattern("\\d+")])],
        flightMaximunDistance: [this.drone.flightMaximunDistance, Validators.compose([Validators.required, Validators.pattern("\\d+")])]
      }),
      pricing: fb.group({
        min: [this.drone.priceRange.min, Validators.compose([Validators.required, Validators.pattern("\\d+\\.\\d{2}")])],
        max: [this.drone.priceRange.max, Validators.compose([Validators.required, Validators.pattern("\\d+\\.\\d{2}")])]
      })
    })

    this.basic = this.formDrone.get('basic') as FormGroup
    this.reference = this.formDrone.get('reference') as FormGroup
    this.features = this.formDrone.get('features') as FormGroup
    this.accessories = this.formDrone.get('accessories') as FormGroup
    this.powerAutonomy = this.formDrone.get('powerAutonomy') as FormGroup
    this.pricing = this.formDrone.get('pricing') as FormGroup

    if (this.drone.$id != undefined) {
      if (this.drone.$id == "CLONE")
        delete this.drone['$id']
      // Loading object values
      this.selectObject(this.brandService.unfilteredList(), this.basic.get('brand'), this.drone.brand.$id)

      //this.reference.get('releaseDate').setValue(new FormControl(this.drone.releaseDate))

      this.selectObject(this.valuableAttributeService.unfilteredList('rcType'), this.accessories.get('rcType'), this.drone.rcType.$id)
      this.selectObject(this.valuableAttributeService.unfilteredList('cameraPhoto'), this.accessories.get('cameraPhoto'), this.drone.cameraPhoto.$id)
      this.selectObject(this.valuableAttributeService.unfilteredList('cameraVideo'), this.accessories.get('cameraVideo'), this.drone.cameraVideo.$id)
      this.selectObject(this.valuableAttributeService.unfilteredList('gimbal'), this.accessories.get('gimbal'), this.drone.gimbal.$id)

      this.selectObject(this.valuableAttributeService.unfilteredList('battery'), this.powerAutonomy.get('battery'), this.drone.battery.$id)
    }
  }

  onAddBrand() {
    this.dialog.open(BrandDialogFormComponent, { width: '500px', height: '350px' });
  }

  onAddCategory() {
    this.dialog.open(CategoryDialogFormComponent, { width: '500px', height: '220px' });
  }

  onAddValuableAttribute(path: string) {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: { path: path }, width: '500px', height: '270px' });
  }

  cancel() {
    this.formDrone.reset()
    this.dialogRef.close()
  }

  saveDrone() {
    this.drone = {
      $id: this.drone.$id,
      ...this.basic.value,
      ...this.reference.value,
      ...this.features.value,
      ...this.accessories.value,
      ...this.powerAutonomy.value,
      priceRange: { ...this.pricing.value },
      videos: this.drone.videos,
      pictures: this.drone.pictures,
      reviews: this.drone.reviews
    }
    if (this.drone.$id == undefined)
      this.droneService.insertDrone(this.drone)
    else
      this.droneService.updateDrone(this.drone)
    this.formDrone.reset()
    this.dialogRef.close()
  }

  selectObject(list: any[], control: AbstractControl, id: string): any {
    let object = list.find(i => i['$id'] == id)
    control.setValue(object)
  }

  onTest() {
    console.log(this.drone.releaseDate.toDate())
    this.reference.get('releaseDate').setValue(this.drone.releaseDate.toDate())
  }

}
