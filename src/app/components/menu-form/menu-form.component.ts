import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() menu$: Observable<any>;
  @Input() views$: Observable<any>;
  @Output() changeView: EventEmitter<string> = new EventEmitter<string>();

  menu: any;
  views: any;
  currentSelectedMenu: any;

  constructor() { }

  ngOnInit() {
    this.menu$.subscribe(menu => {
      this.menu = menu;
      this.currentSelectedMenu = menu[0];
    });
  }

  onClick() {
    this.currentSelectedMenu = this.menu[0];
    this.changeView.emit('UP_stats');
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof(item));
  }

  isView(item) {
    return typeof(item) == 'string'
  }

  getMenuChild(item) {
    return Object.values(item)[0];
  }

  getItemName(item) {
    if (typeof(item) == 'string') {
      return item;
    } else {
      return Object.keys(item)[0];
    }
  }

}
