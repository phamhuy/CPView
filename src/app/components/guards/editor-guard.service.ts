import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FileLoaderService } from '../../services/file-loader.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EditorGuard implements CanActivate {
  constructor(
    private fileLoaderService: FileLoaderService,
    private router: Router
  ) { }

	canActivate(): Observable<boolean> {
    return this.fileLoaderService.isLoaded.pipe(
      map(isLoaded => {
        if (!isLoaded) {
          this.router.navigate(['/']);
        }
        return isLoaded;
      })
    );
	}
}