import { Brand } from './../../../core/model/brand.model';
import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';

import { BrandDialogFormComponent } from './../basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { screenAnimation, itemAnimation } from 'src/app/shared/animations/form-animations';

@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrls: ['../../../app.component.scss'],
  animations: [
    screenAnimation,
    itemAnimation
  ]
})
export class BrandsAdminComponent implements OnInit {

  formState: string = 'opened'

  constructor(public service: BrandService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  addBrand() {
    this.dialog.open(BrandDialogFormComponent, { width: '500px', height: '350px' });
  }

  editBrand(brand: Brand) {
    this.dialog.open(BrandDialogFormComponent, { width: '500px', height: '350px', data: {...brand} })
  }

  deleteBrand(id: string) {
    this.service.deleteBrand(id)
  }

}
