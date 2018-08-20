import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
	name: string;
  attributes = [];

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: {
			title: string,
      item: any,
      tags: string[],
    }) { }

  ngOnInit() {
		this.name = this.data.item.name;
    for (let propName in this.data.item.attributes) {
      this.attributes.push([propName, this.data.item.attributes[propName]]);
    }
  }

  onSave() {
		this.data.item.name = this.name;
    this.data.item.attributes = {};
		for (let attr of this.attributes) {
			this.data.item.attributes[attr[0]] = attr[1];
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
			this.onSave();
			this.dialogRef.close(true);
		}
	}

	log(e) {
		console.log(e);
	}

}
