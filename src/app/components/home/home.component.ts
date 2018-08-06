import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: any;
  views: any;

  constructor(private fileLoaderService : FileLoaderService) { }

  ngOnInit() {
  }

  onChanged(e) {
    let file = e.target.files[0];
    this.fileLoaderService.loadFile(file).subscribe(([menus, views]) => {
      this.menus = menus;
      this.views = views;
    });
  }

}
