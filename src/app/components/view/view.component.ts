import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
	@Input() view: any;

	expandAll: boolean = true;
	collapseExpandIcon: string = 'remove';

	constructor() { }

  ngOnInit() {
	}

	onCollapseExpand() {
    this.expandAll = !this.expandAll;
    this.collapseExpandIcon = (this.expandAll ? 'remove' : 'add');
  }

}
