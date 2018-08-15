import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  @Input() view: any;
  @Input() expanded: boolean;
  items: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'view') {
        if (Object.keys(this.view).length < 2) {
          this.items = [this.view];
        }

        for (let key in this.view) {
          if (key != '_attributes') {
            if (Array.isArray(this.view[key])) {
              for (let value of this.view[key]) {
                let item = {}; item[key] = value;
                this.items.push(item);
              }
            } else {
              let item = {}; item[key] = this.view[key];
              this.items.push(item);
            }
          }
        }
      }
    }
  }

  getType(item) {
    return Object.keys(item)[0];
  }

  getChildren(item) {
    return Object.values(item)[0];
  }

  getContent(item: Object) {
    let attributes = Object.values(item)[0]._attributes;
    let content = '';
    for (let key in attributes) {
      content += key + '="' + attributes[key] + '" ';
    }
    return content;
  }

  isLeaf(item) {
    return Object.keys(Object.values(item)[0]).length < 2;
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof(item));
  }

}
