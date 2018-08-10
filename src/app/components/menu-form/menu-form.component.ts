import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  @Input() menu: any;

  constructor() { }

  ngOnInit() {
  }

}
