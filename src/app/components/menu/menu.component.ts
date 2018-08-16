import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@Input() menu: Array<any>;
	@Output() changeView: EventEmitter<string> = new EventEmitter<string>();
	currentSelectedItem: any = null;

	constructor() { }

	isView(item) {
		return typeof(item) == 'string';
	}

	ngOnChanges() {
		this.currentSelectedItem = this.menu[0];
    let item = this.currentSelectedItem;
    while (!this.isView(item)) {
      item = Object.values(item)[0];
    }
    this.changeView.emit(item);
  }

  ngOnInit() {
	}

	onChangeView(viewtag) {
    this.changeView.emit(viewtag);
  }

	onEdit() {
    console.log('onEdit');
  }

  onAdd() {
    console.log('onAdd');
  }

  onRemove() {
    console.log('onRemove');
  }

}
