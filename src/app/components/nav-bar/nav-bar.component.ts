import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoaded$: Observable<boolean>;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.isLoaded$ = this.fileService.isLoaded;
  }

}
