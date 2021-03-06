import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MenuChildComponent } from '../menu-child/menu-child.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@ViewChild(MenuChildComponent) menuComponent !: MenuChildComponent
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

	ngAfterViewInit() {
		this.selectedMenuComponent = this.menuComponent;
	}

	onChangeSelectedItem(menuComponent) {
		this.selectedMenuComponent = menuComponent;
		let item = menuComponent.menu[menuComponent.curSelectedIndex];
		while (item && !this.isView(item)) {
			item = item.elements[0];
		}
		if (item) {
			this.changeView.emit(item.attributes.viewtag);
		}
	}

	onEdit() {
		// Extract data from currently selected item
		let menu = this.selectedMenuComponent.menu;
		let index = this.selectedMenuComponent.curSelectedIndex;
		let item = menu[index];

		// Open an edit dialog
		const dialogRef = this.dialog.open(EditDialogComponent, {
			data: {
				title: 'Edit',
				item: item,
				tags: ['Menu', 'View', 'DynamicView']
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				if (item.name == 'View') {
					delete item.elements;
				}
			}
		});
	}

	onAdd() {
		// Extract data from currently selected item
		let menu = this.selectedMenuComponent.menu;
		let index = this.selectedMenuComponent.curSelectedIndex;

		// Open an add dialog
		const dialogRef = this.dialog.open(AddDialogComponent, {
			data: {
				asChildDisable: !!menu && menu[index].name == 'View',
				tags: ['Menu', 'View', 'Dynamic']
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				if (result.newItem.name == 'View') {
					delete result.newItem.elements;
				}
				if (result.asChild) {
					menu[index].elements.push(result.newItem);
				} else {
					menu.splice(index, 0, result.newItem);
				}
			}
		});
	}

	onRemove() {
		// Extract data from currently selected item
		let menu = this.selectedMenuComponent.menu;
		let index = this.selectedMenuComponent.curSelectedIndex;
		let data = {
			type: menu[index].name,
			attributes: menu[index].attributes
		};

		// Open a remove confirmation dialog
		const dialogRef = this.dialog.open(RemoveDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				menu.splice(index, 1);
				this.selectedMenuComponent.curSelectedIndex %= menu.length;
			}
		});
	}

}