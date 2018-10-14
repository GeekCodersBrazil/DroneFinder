import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ValuableAttribute } from '../../../../core/model/subtypes/valuable-attribute';
import { ValuableAttributeService } from '../../../../core/service/valuable-attribute-service';

@Component({
  selector: 'app-valuable-attribute-dialog-form',
  templateUrl: './valuable-attribute-dialog-form.component.html',
  styleUrls: ['./valuable-attribute-dialog-form.component.scss']
})
export class ValuableAttributeDialogFormComponent implements OnInit {

  value: ValuableAttribute = new ValuableAttribute()
  service: ValuableAttributeService

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ValuableAttributeDialogFormComponent>) {
    this.service = data.service
    console.log(this.service)
  }

  ngOnInit() {

  }

  onOkClick() {
    this.service.insertValue(this.value)
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
