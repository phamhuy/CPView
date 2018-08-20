import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	@Input() views: Array<any>;
	@Input() curViewTag: string;
	curView: any; // The current view
	viewsMap: any = null; // A dictionary map from viewtag to a view

	constructor(public dialog: MatDialog) { }

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) {
			if (propName == 'curViewTag' && this.viewsMap) {
				this.curView = this.viewsMap[this.curViewTag];
			}
		}
	}

	ngOnInit() {
		// Convert views array to a dictionary with viewtag as key for fast lookup
		this.viewsMap = {};
		for (let view of this.views) {
			this.viewsMap[view.attributes.viewtag] = view;
		}
		this.curView = this.viewsMap[this.curViewTag];
	}

	getAttributes() {
		return Object.keys(this.curView.attributes);
	}

	onEdit() {
		let data = {
			title: 'Edit Attributes',
			item: this.curView,
			tags: ['View']
		};

		const dialogRef = this.dialog.open(EditDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				// Update the dictionary if viewtag has been changed
				if (this.curViewTag != this.curView.attributes.viewtag) {
					delete this.viewsMap[this.curViewTag];
					this.curViewTag = this.curView.attributes.viewtag;
					this.viewsMap[this.curViewTag] = this.curView;
				}
			}
		});
	}

	onAdd() {
		let data = {
			asChildDisable: true,
			asChild: true,
			tags: ['Block', 'Dynamic', 'Activate', 'IsActive']
		};

		const dialogRef = this.dialog.open(AddDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.curView.elements.push(result.newItem);
			}
		});
	}

	onRemove() {
		let data = {
			type: 'View',
			attributes: this.curView.attributes
		}
		const dialogRef = this.dialog.open(RemoveDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				// Update the current viewtag and delete the view in the array and the dictionary
				delete this.viewsMap[this.curViewTag];
				for (let index in this.views) {
					let view = this.views[index];
					if (view.attributes.viewtag == this.curViewTag) {
						this.views.splice(parseInt(index), 1);
						break;
					}
				}
				this.curView = null;
			}
		});
	}

	onAddView() {
		let data = {
			asChildDisable: true,
			tags: ['View']
		}

		const dialogRef = this.dialog.open(AddDialogComponent, { data: data });
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.views.push(result.newItem);
				this.curView = result.newItem;
				this.curViewTag = this.curView.attributes.viewtag;
				this.viewsMap[this.curViewTag] = this.curView;
			}
		});
	}

}
