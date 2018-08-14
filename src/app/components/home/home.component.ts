import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private fileLoaderService : FileLoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    if ('file' in localStorage) {
      this.fileLoaderService.loadFile2(localStorage.file).subscribe(isLoaded => {
        if (isLoaded) {
          this.router.navigate(['/editor']);
        }
      });
    }
  }

  onChanged(e) {
    let file = e.target.files[0];
    this.fileLoaderService.loadFile(file).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

  onClick() {
    this.fileLoaderService.loadFile2(localStorage.file).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

}
