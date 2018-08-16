import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { FileSaver } from 'file-saver';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  menu: any;
  views: any;
  currentView: any;

  constructor(
		private fileService: FileService
  ) { }

  ngOnInit() {
    this.fileService.getConfig().subscribe(([menu, views]) => {
      this.menu = menu;
			this.views = views;
    });
  }

  onChangeView(viewtag) {
    this.currentView = this.views[viewtag];
  }

}