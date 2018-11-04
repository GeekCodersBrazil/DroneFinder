import { MatDialog } from '@angular/material';
import { BrandService } from './../../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';

import { BrandDialogFormComponent } from './../basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';

@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrls: ['./brands-admin.component.scss']
})
export class BrandsAdminComponent implements OnInit {

  constructor(public service: BrandService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  addBrand() {
    this.dialog.open(BrandDialogFormComponent, { width: '500px', height: '350px' });
  }

}
