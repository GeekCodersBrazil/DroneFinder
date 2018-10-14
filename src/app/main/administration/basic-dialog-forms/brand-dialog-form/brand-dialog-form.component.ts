import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Brand } from '../../../../core/model/brand.model';
import { BrandService } from '../../../../core/service/brand.service';

@Component({
  selector: 'app-brand-dialog-form',
  templateUrl: './brand-dialog-form.component.html',
  styleUrls: ['./brand-dialog-form.component.scss']
})
export class BrandDialogFormComponent implements OnInit {

  brand: Brand = new Brand()

  constructor(private brandService: BrandService, public dialogRef: MatDialogRef<BrandDialogFormComponent>) {
  }

  ngOnInit() {

  }

  onOkClick() {
    this.brandService.insertBrand(this.brand)
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
