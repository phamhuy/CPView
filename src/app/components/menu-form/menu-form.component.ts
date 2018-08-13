import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() menu: Array<any>;
  @Input() views: Array<any>;
  currentSelectedItem: any = null;

  @Output() changeView: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'menu' || propName == 'views') {
        this.currentSelectedItem = this.menu[0];
      }
    }
  }

  ngOnInit() {
  }

  onClick(i) {
    this.currentSelectedItem = this.menu[i];
    let item = this.currentSelectedItem;
    while (!this.isView(item)) {
      item = this.getChildMenu(item)[0];
    }
    this.changeView.emit(item);
  }

  onChangeView(viewtag) {
    this.changeView.emit(viewtag);
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof(item));
  }

  isView(item) {
    return typeof(item) == 'string'
  }

  getChildMenu(item) {
    return Object.values(item)[0];
  }

  getItemName(item) {
    if (this.isView(item)) {
      return item;
    } else {
      return Object.keys(item)[0];
    }
  }

}
