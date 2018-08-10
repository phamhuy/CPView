import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  menu: any;
  views: any;
  currentView: any;

  constructor(private fileLoaderService: FileLoaderService) { }

  ngOnInit() {
    this.fileLoaderService.getConfig().subscribe(([menu, views]) => {
      this.menu = of(menu[0].CPVIEW);
      this.views = (views);
    });
  }

  onChangeView(viewtag) {
    this.currentView = this.views[viewtag];
  }
}
