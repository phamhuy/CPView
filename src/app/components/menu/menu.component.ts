import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@Input() menu: Array<any>;
	@Output() changeView: EventEmitter<string> = new EventEmitter<string>();

	selectedMenuComponent: any;

	constructor() { }

	isView(item) {
		return item.name == 'View' || item.name == 'DynamicView';
	}

	ngOnChanges() {
    let item = this.menu[0];
    while (!this.isView(item)) {
      item = item.elements[0];
    }
    this.changeView.emit(item.attributes.viewtag);
  }

  ngOnInit() {
	}

	onChangeSelectedItem(menuComponent) {
		this.selectedMenuComponent = menuComponent;
		let item = menuComponent.menu[menuComponent.curSelectedIndex];
    while (!this.isView(item)) {
      item = item.elements[0];
		}
    this.changeView.emit(item.attributes.viewtag);
  }

	onEdit() {
    console.log('onEdit');
  }

  onAdd() {
    console.log('onAdd');
  }

  onRemove() {
		let menu = this.selectedMenuComponent.menu;
		menu.splice(this.selectedMenuComponent.curSelectedIndex, 1);
		this.selectedMenuComponent.curSelectedIndex %= menu.length;
  }

}
