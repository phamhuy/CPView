import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../services/file-loader.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  menusForm: FormGroup;
  viewsForm: FormGroup;


  constructor(
    private fileLoader: FileLoaderService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.menusForm = this.fb.group({
      menus: this.fb.array([])
    })
    this.viewsForm = this.fb.group({
      views: this.fb.array([])
    })
    this.fileLoader.getConfig().subscribe(([menus, views]) => {
      console.log(menus);
      // for (let menu in menus) {
      //   this.menus.push(this.fb.control(menu));
      // }

      for (let view in views) {
        this.views.push(this.fb.control(view));
      }

      // console.log(this.views);
      console.log(this.menus);
    });

  }

  get menus() {
    return this.menusForm.get('menus') as FormArray;
  }

  get views() {
    return this.viewsForm.get('views') as FormArray;
  }

  log(val) {
    console.log(val);
  }
}
