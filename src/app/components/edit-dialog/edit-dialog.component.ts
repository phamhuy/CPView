import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  result: any = {};
  attributes = [];

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: {
      name: string,
      attributes: any,
      tags: string[],
    }) { }

  ngOnInit() {
    this.result['name'] = this.data.name;
    for (let propName in this.data.attributes) {
      this.attributes.push([propName, this.data.attributes[propName]]);
    }
  }

  updateAttributes() {
    this.result['attributes'] = {};
		for (let attr of this.attributes) {
			this.result.attributes[attr[0]] = attr[1];
    }
  }

  onRemoveAttr(i) {
    this.attributes.splice(i, 1);
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
