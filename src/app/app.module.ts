import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatCardModule, MatChipsModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { GatewayLoginFormComponent } from './components/gateway-login-form/gateway-login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';
import { EditorGuard } from './components/guards/editor-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent, RemoveMenuDialog } from './components/menu/menu.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MenuFormComponent,
    ViewFormComponent,
    LoginFormComponent,
    GatewayLoginFormComponent,
    EditorComponent,
    NotFoundComponent,
    MenuComponent,
    ViewComponent,
    RemoveMenuDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [RemoveMenuDialog],
  providers: [
    EditorGuard,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
