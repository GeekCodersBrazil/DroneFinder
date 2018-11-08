import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Brand } from '../../../../core/model/brand.model';
import { BrandService } from '../../../../core/service/brand.service';

@Component({
  selector: 'app-brand-dialog-form',
  templateUrl: './brand-dialog-form.component.html',
  styleUrls: ['./brand-dialog-form.component.scss']
})
export class BrandDialogFormComponent implements OnInit {

  brand: Brand = new Brand()

  constructor(@Inject(MAT_DIALOG_DATA) public data: Brand, private brandService: BrandService, public dialogRef: MatDialogRef<BrandDialogFormComponent>) {
    if (data != undefined)
      this.brand = data
  }

  ngOnInit() {

  }

  onOkClick() {
    if (this.brand.$id != undefined)
      this.brandService.updateBrand(this.brand)
    else
      this.brandService.insertBrand(this.brand)
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
