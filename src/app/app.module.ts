import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuChildComponent } from './components/menu-child/menu-child.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatCardModule, MatChipsModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { GatewayLoginFormComponent } from './components/gateway-login-form/gateway-login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';
import { EditorGuard } from './components/guards/editor-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { ViewComponent } from './components/view/view.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { RemoveDialogComponent } from './components/remove-dialog/remove-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MenuChildComponent,
    ViewChildComponent,
    LoginFormComponent,
    GatewayLoginFormComponent,
    EditorComponent,
    NotFoundComponent,
    MenuComponent,
    ViewComponent,
    AddDialogComponent,
    RemoveDialogComponent,
    EditDialogComponent
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
		MatDialogModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule
  ],
  entryComponents: [
		AddDialogComponent,
		RemoveDialogComponent,
		EditDialogComponent
	],
  providers: [EditorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
