import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-add-dialog',
	templateUrl: './add-dialog.component.html',
	styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
	attributes = [['', '']]
	result: any = {};

	constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { asChildDisable: boolean, tags: Array<string> }) { }

	ngOnInit() {
		this.result['asChild'] = false;
		this.result['newItem'] = {
			type: 'element',
			name: this.data.tags[0],
			attributes: {},
			elements: [],
		};
	}

	updateAttributes() {
		for (let attr of this.attributes) {
			this.result.newItem.attributes[attr[0]] = attr[1];
		}
	}

	onTagChange() {
		if (this.result.name == 'Menu') {
			this.result.newItem['elements'] = [];
		} else {
			delete this.result.newItem.elements;
		}
	}

	onCheckboxToggle() {
		this.result.asChild = !this.result.asChild;
	}

	onAddAttr() {
		this.attributes.push(['', '']);
	}

	onCancelClick() {
		this.dialogRef.close();
	}

	@HostListener('keyup', ['$event.key'])
	onkeyup(key) {
		if (key == 'Enter') {
			this.updateAttributes();
			this.dialogRef.close(this.result);
		}
	}

}
