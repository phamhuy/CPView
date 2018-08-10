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

  constructor(private fileLoaderService: FileLoaderService) { }

  ngOnInit() {
    this.fileLoaderService.getConfig().subscribe(([menu, views]) => {
      this.menu = menu;
      this.views = views;
    });
  }

  onClick() {
    this.menu = 5;
  }

}
