import { ValuableAttributeService } from './../../../../core/service/valuable-attribute.Service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ValuableAttribute } from '../../../../core/model/subtypes/valuable-attribute';

@Component({
  selector: 'app-valuable-attribute-dialog-form',
  templateUrl: './valuable-attribute-dialog-form.component.html',
  styleUrls: ['./valuable-attribute-dialog-form.component.scss']
})
export class ValuableAttributeDialogFormComponent implements OnInit {

  value: ValuableAttribute = new ValuableAttribute()
  path: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ValuableAttributeDialogFormComponent>, public service: ValuableAttributeService) {
    this.path = data.path
    if (data.value != undefined) {
      this.value = data.value
    }
  }

  ngOnInit() {

  }

  onOkClick() {
    if (this.value['$id'] != undefined)
      this.service.updateValue(this.path, this.value)
    else
      this.service.insertValue(this.path, this.value)
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
