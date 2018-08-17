import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-remove-dialog',
	templateUrl: './remove-dialog.component.html',
	styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent {

	constructor(public dialogRef: MatDialogRef<RemoveDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: {type: string, attributes: object}) { }

	onCancelClick() {
		this.dialogRef.close();
	}

	getItemType() {
		return this.data.type;
	}

	getItemAttr() {
		let attr = '';
		for (let propName in this.data.attributes) {
			attr += propName + '="' + this.data.attributes[propName] + '" ';
		}

		return attr;
	}
}
