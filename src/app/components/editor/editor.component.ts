import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private fileLoader : FileLoaderService) { }

  ngOnInit() {
    this.fileLoader.getConfig().subscribe(([menus, views]) => {
    });
  }

}
