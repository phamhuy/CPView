import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';

@Component({
	selector: 'app-view-child',
	templateUrl: './view-child.component.html',
	styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
	@Input() view: any;
	@Input() parentView: any;
	attributes: any[]; // List of attributes for the initial rendering

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
		this.updateAttributes();
	}

	updateAttributes() {
		this.attributes = [];
		for (let propName in this.view.attributes) {
			this.attributes.push([propName, this.view.attributes[propName]]);
		}
	}

	isLeaf() {
		return !('elements' in this.view);
	}

	log(...args: any[]) {
		for (let item of args)
			console.log(item, typeof (item));
	}

	onEdit() {
		let data = {
			title: 'Edit',
			item: this.view,
			tags: [this.view.name]
		}

		const dialogRef = this.dialog.open(EditDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.updateAttributes();
			}
		});
	}

	onAdd() {
		let data = {
			asChildDisable: false,
			tags: []
		};

		switch (this.view.name) {
			case 'Dynamic':
			case 'Activate':
			case 'IsActive':
				data.tags = ['Block', 'Dynamic', 'Activate', 'IsActive'];
				data.asChildDisable = true;
				break;
			case 'Block':
				data.tags = ['Block', 'Stat', 'Dynamic', 'Activate', 'IsActive'];
				break;
			case 'Stat':
				data.tags = ['Stat', 'Column'];
				break;
			case 'Column':
				data.tags = ['Column', 'Row'];
				break;
			case 'Row':
				data.tags = ['Row', 'Limit'];
				break;
			case 'Limit':
				data.tags = ['Limit'];
				break;
		}

		const dialogRef = this.dialog.open(AddDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				if (result.asChild) {
					this.view.elements.push(result.newItem);
				} else {
					// Find index of current view and add the new item before it
					for (let index in this.parentView.elements) {
						if (this.view === this.parentView.elements[index]) {
							this.parentView.elements.splice(index, 0, result.newItem);
							break;
						}
					}
				}
			}
		});
	}

	onRemove() {
		let data = {
			type: this.view.name,
			attributes: this.view.attributes
		}
		const dialogRef = this.dialog.open(RemoveDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				for (let index in this.parentView.elements) {
					if (this.view === this.parentView.elements[index]) {
						this.parentView.elements.splice(index, 1);
						break;
					}
				}
			}
		});
	}

	onInputAttr(propName, val) {
				this.view.attributes[propName] = val;
			}

}