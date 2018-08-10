import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoaded$: Observable<boolean>;

  constructor(private fileLoaderService: FileLoaderService) { }

  ngOnInit() {
    this.isLoaded$ = this.fileLoaderService.isLoaded;
  }

}
