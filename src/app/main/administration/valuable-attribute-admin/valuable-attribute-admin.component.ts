import { ValuableAttribute } from './../../../core/model/subtypes/valuable-attribute';
import { MatDialog } from '@angular/material';
import { ValuableAttributeService } from './../../../core/service/valuable-attribute.Service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { screenAnimation, itemAnimation } from 'src/app/shared/animations/form-animations';
import { Router } from '@angular/router';
import { ValuableAttributeDialogFormComponent } from '../basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';

@Component({
  selector: 'app-valuable-attribute-admin',
  templateUrl: './valuable-attribute-admin.component.html',
  styleUrls: ['../../../app.component.scss'],
  animations: [
    screenAnimation,
    itemAnimation
  ]
})
export class ValuableAttributeAdminComponent implements OnInit, OnDestroy {

  formName = {
    rcType: 'RC',
    cameraPhoto: 'Camera Photo',
    cameraVideo: 'Camera Video',
    gimbal: 'Gimbal',
    battery: 'Battery'}
  pluralName = {
    rcType: 'RCs',
    cameraPhoto: 'Cameras Photo',
    cameraVideo: 'Cameras Video',
    gimbal: 'Gimbals',
    battery: 'Batteries'}

  formState: string = 'opened'
  searchString: string = ''
  attribute: string

  constructor(public service: ValuableAttributeService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.attribute = this.router.url.substr(7) // Ok, it's horrible and I know it.  Sorry!
  }

  ngOnDestroy(): void {
    this.service.unsubscribe();
  }

  addItem() {
    this.dialog.open(ValuableAttributeDialogFormComponent, { data: {path: this.attribute}, width: '500px', height: '270px' });
  }

  editValue(item: ValuableAttribute) {
    this.dialog.open(ValuableAttributeDialogFormComponent, { width: '500px', height: '270px', data: {path: this.attribute, value: {...item}}})
  }

  deleteValue(item: ValuableAttribute) {
    this.service.deleteValue(this.attribute, item)
  }

}
