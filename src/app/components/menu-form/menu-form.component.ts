import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomColorService } from '../../services/random-color.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() menu$: Observable<any> = new Observable<any>();
  @Input() views$: Observable<any> = new Observable<any>();

  @Input() menu: Array<any>;
  @Input() views: Array<any>;
  currentSelectedItem: any;

  @Output() changeView: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit() {
    if (this.menu && this.menu.length > 0) {
      this.currentSelectedItem = this.menu[0];
    }
    this.menu$.subscribe(menu => {
      this.menu = menu;
      this.currentSelectedItem = menu[0];
    });
  }

  onClick(i) {
    this.currentSelectedItem = this.menu[i];
    this.changeView.emit('UP_stats');
  }

  log(...args: any[]) {
    for (let item of args)
      console.log(item, typeof(item));
  }

  isView(item) {
    return typeof(item) == 'string'
  }

  getChildMenu(item) {
    return Object.values(item)[0];
  }

  getItemName(item) {
    if (this.isView(item)) {
      return item;
    } else {
      return Object.keys(item)[0];
    }
  }

}
