import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  menu: any;
  views: any;
  currentView: any;
  expandAll: boolean = true;
  collapseExpandIcon: string = 'remove';

  constructor(
    private fileLoaderService: FileLoaderService
  ) { }

  ngOnInit() {
    this.fileLoaderService.getConfig().subscribe(([menu, views]) => {
      this.menu = menu[0].CPVIEW;
      this.views = (views);
    });
  }

  onChangeView(viewtag) {
    this.currentView = this.views[viewtag];
  }

  onEdit() {
    console.log('onEdit');
  }

  onAdd() {
    console.log('onAdd');
  }

  onRemove() {
    console.log('onRemove');
  }

  onCollapseExpand() {
    this.expandAll = !this.expandAll;
    this.collapseExpandIcon = (this.expandAll ? 'remove' : 'add');
  }

}