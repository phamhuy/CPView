import { Component, OnInit, Input, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @Input() view: any;

  constructor() { }

  ngOnInit() {
  }

  getAttributes() {
    return Object.keys(this.view.attributes);
  }

  isLeaf() {
    return !('elements' in this.view);
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof (item));
  }

  onAdd() {
    let data = {
      asChildDisable: false,
      tags: []
    };
    switch (this.view.name) {
      case 'Block':
        data.tags = ['Block', 'Stat']
        break;
      case 'View':
        break;
    }
  }

}