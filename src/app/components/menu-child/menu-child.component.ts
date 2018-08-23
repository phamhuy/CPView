import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-child',
  templateUrl: './menu-child.component.html',
  styleUrls: ['./menu-child.component.css']
})
export class MenuChildComponent implements OnInit {
  @Input() menu: Array<any>;
  @Input() colorNumber: number;
  curSelectedIndex: any = null;
  colorClass = {};
  darkColorClass = {};
  contextMenuItems = ['Edit', 'Add'];

  @Output() changeSelectedItem: EventEmitter<any> = new EventEmitter<any>();

  static colors = ['primary', 'accent', 'warn'];

  constructor( ) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'menu') {
        this.curSelectedIndex = 0;
      } else if (propName == 'colorNumber') {
        this.colorClass['button-' + MenuChildComponent.colors[this.colorNumber % MenuChildComponent.colors.length]] = true;
        this.darkColorClass['button-dark-' + MenuChildComponent.colors[this.colorNumber % MenuChildComponent.colors.length]] = true;
      }
    }
  }

  ngOnInit() {
  }

  onClick(i) {
    this.curSelectedIndex = i;
		this.changeSelectedItem.emit(this);
  }

  onChangeSelectedItem(item) {
    this.changeSelectedItem.emit(item);
  }

  isView(item) {
    return item.name == 'View' || item.name == 'DynamicView';
  }

  getChildMenu(item) {
    return item.elements;
  }

  getItemName(item) {
		return this.isView(item) ? item.attributes.viewtag : item.attributes.name;
  }

}
