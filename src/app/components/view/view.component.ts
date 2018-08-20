import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() views: any[];
  @Input() curViewTag: string;
  viewToIndexMap: any = null; // A dictionary map from viewtag to array index
  viewAttributes: any[]; // List of all attributes of the View tag
  curView: any; // Current view

  constructor(public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'curViewTag' && this.viewToIndexMap) {
        this.curView = this.views[this.viewToIndexMap[this.curViewTag]];
      }
    }
  }

  ngOnInit() {
    // Convert views array to a dictionary with viewtag as key for fast lookup
    this.viewToIndexMap = {};
    for (let index in this.views) {
      this.viewToIndexMap[this.views[index].attributes.viewtag] = index;
    }
    this.curView = this.views[this.viewToIndexMap[this.curViewTag]];

    // Find all attributes of a View tag
    let findAttr = (attributes, items) => {
      for (let item of items) {
        if (item.name == 'View') {
          for (let propName in item.attributes) {
            if (propName in attributes) {
              attributes[propName]++;
            } else {
              attributes[propName] = 1;
            }
          }
        }
        if ('elements' in item) {
          findAttr(attributes, item.elements);
        }
      }
    }
    let attributes = {};
    findAttr(attributes, this.views);
    this.viewAttributes = Object.keys(attributes);
  }

  getAttributes() {
    return Object.keys(this.views[this.viewToIndexMap[this.curViewTag]].attributes);
  }

  onAddAttr() {
    let data = {
      name: 'View',
      attributes: this.curView.attributes,
      tags: ['View']
    }

    const dialogRef = this.dialog.open(EditDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let propName in result) {
          this.curView[propName] = result[propName];
        }
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
        this.views.splice(this.viewToIndexMap[this.curViewTag], 1);
        this.curView = this.views[this.viewToIndexMap[this.curViewTag]];
      }
    });
  }

}
