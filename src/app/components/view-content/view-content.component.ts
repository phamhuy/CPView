import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof(item));
  }

  contentToArray() {
    let contentArr = [];
    for (let key in this.content) {
      if (key != '_attributes') {
        let item = {};
        item[key] = this.content[key];
        contentArr.push(item);
      }
    }

    return contentArr;
  }

  getType(item) {
    return Object.keys(item)[0];
  }

  getContent(item) {
    let content = Object.values(item)[0];
    if (!Array.isArray(content)) {
      content = [content];
    }

    return content;
  }

  isArray(item) {
    return Array.isArray(item);
  }

}
