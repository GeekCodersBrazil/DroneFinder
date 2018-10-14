import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shd-array-container',
  templateUrl: './array-container.component.html',
  styleUrls: ['./array-container.component.scss']
})
export class ArrayContainerComponent implements OnInit {

  @Input() title: string
  @Input() items: string[]
  value: string

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push(this.value);
    this.value = ""
  }

  deleteItem(i: number) {
    this.items.splice(i, 1)
  }

}
