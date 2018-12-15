import { DroneService } from './../../../core/service/drone.service';
import { Component, OnInit } from '@angular/core';
import { screenAnimation, itemAnimation } from 'src/app/shared/animations/form-animations';
import { MatDialog } from '@angular/material';
import { DroneFormComponent } from '../drone-form/drone-form.component';
import { Drone } from 'src/app/core/model/drone.model';

@Component({
  selector: 'app-drone-admin',
  templateUrl: './drone-admin.component.html',
  styleUrls: ['../../../app.component.scss', './drone-admin.component.scss'],
  animations: [
    screenAnimation,
    itemAnimation
  ]
})
export class DroneAdminComponent implements OnInit {

  formState: string = 'opened'
  searchString: string = ''

  constructor(public service: DroneService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.service.unsubscribe();
  }

  addDrone() {
    this.dialog.open(DroneFormComponent, { width: '80%', height: '75%' });
  }

  editDrone(drone: Drone) {
    this.dialog.open(DroneFormComponent, { width: '80%', height: '75%', data: {...drone} })
  }

  deleteDrone(id: string) {
    this.service.deleteDrone(id)
  }

}
