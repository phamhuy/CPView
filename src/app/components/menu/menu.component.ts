import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@Input() menu: Array<any>;
	@Output() changeView: EventEmitter<string> = new EventEmitter<string>();

	selectedMenuComponent: any;

	constructor(public dialog: MatDialog) { }

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
    if (this.selectedMenuComponent) {
      // Extract data from currently selected item
      let menu = this.selectedMenuComponent.menu;
      let index = this.selectedMenuComponent.curSelectedIndex;
      let item = menu[index];

      // Open a remove confirmation dialog
      const dialogRef = this.dialog.open(RemoveMenuDialog, {data: item});

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          menu.splice(index, 1);
          this.selectedMenuComponent.curSelectedIndex %= menu.length;
        }});
    }
  }

}

@Component({
  selector: 'remove-menu-dialog',
  templateUrl: 'remove-menu-dialog.html'
})
export class RemoveMenuDialog {

  constructor(
    public dialogRef: MatDialogRef<RemoveMenuDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancelClick() {
    this.dialogRef.close();
  }

  getItemType() {
    return this.data.name;
  }

  getItemName() {
    return this.data.name == 'Menu' ? this.data.attributes.name : this.data.attributes.viewtag;
  }

}
