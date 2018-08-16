import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileService } from '../../services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private fileService : FileService,
    private router: Router
  ) { }

  ngOnInit() {
    if ('file' in localStorage) {
      this.fileService.loadFile2(localStorage.file).subscribe(isLoaded => {
        if (isLoaded) {
          this.router.navigate(['/editor']);
        }
      });
    }
  }

  onChanged(e) {
    let file = e.target.files[0];
    this.fileService.loadFile(file).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

  onClick() {
    this.fileService.loadFile2(localStorage.file).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

}
