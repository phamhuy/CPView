import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { EditorComponent } from './components/editor/editor.component';
import { EditorGuard } from './components/guards/editor-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: EditorComponent, canActivate: [EditorGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
