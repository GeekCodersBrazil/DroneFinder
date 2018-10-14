import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { CategoryService } from './../../../../core/service/category.service';

@Component({
  selector: 'app-category-dialog-form',
  templateUrl: './category-dialog-form.component.html',
  styleUrls: ['./category-dialog-form.component.scss']
})
export class CategoryDialogFormComponent implements OnInit {

  category: string

  constructor(private categoryService: CategoryService, public dialogRef: MatDialogRef<CategoryDialogFormComponent>) {
  }

  ngOnInit() {

  }

  onOkClick() {
    this.categoryService.insertCategory(this.category)
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
