import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FileService } from '../../services/file.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EditorGuard implements CanActivate {
  constructor(
    private fileService: FileService,
    private router: Router
  ) { }

	canActivate(): Observable<boolean> {
    return this.fileService.isLoaded.pipe(
      map(isLoaded => {
        if (!isLoaded) {
          this.router.navigate(['/']);
        }
        return isLoaded;
      })
    );
	}
}