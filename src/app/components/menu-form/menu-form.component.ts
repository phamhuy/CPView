import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() menu: Array<any>;
  @Input() views: Array<any>;
  @Input() colorNumber: number;
  currentSelectedItem: any = null;
  colorClass = {};
  darkColorClass = {};
  contextMenuItems = ['Edit', 'Add'];

  @Output() changeView: EventEmitter<string> = new EventEmitter<string>();

  static colors = ['primary', 'accent', 'warn'];

  constructor( ) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'menu' || propName == 'views') {
        this.currentSelectedItem = this.menu[0];
        if (this.isView(this.currentSelectedItem)) {
          this.changeView.emit(this.currentSelectedItem);
        }
      } else if (propName == 'colorNumber') {
        this.colorClass['button-' + MenuFormComponent.colors[this.colorNumber % MenuFormComponent.colors.length]] = true;
        this.darkColorClass['button-dark-' + MenuFormComponent.colors[this.colorNumber % MenuFormComponent.colors.length]] = true;
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
