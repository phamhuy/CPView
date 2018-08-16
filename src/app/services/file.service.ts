import { Injectable } from '@angular/core';
import { xml2json, json2xml, js2xml } from 'xml-js';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  fileReader: FileReader = new FileReader();
  cpview_conf$: Subject<[any, any]> = new BehaviorSubject(null);
  isLoaded: Subject<boolean> = new BehaviorSubject(false);
  config: any;

  constructor() {
    this.fileReader.onload = () => {
      localStorage.file = this.fileReader.result;
      let menu = JSON.parse(xml2json(this.fileReader.result, { compact: false })).elements[0];
      let views_arr = JSON.parse(xml2json(this.fileReader.result, { compact: true })).CPViewConfig.Views.View;

      // Convert menus into a dictionary with menu name as key recursively and flatten the views in a menu to only contain view name
      console.log(menu);
      console.log(views_arr);
      menu = this._flatten_menu(menu);

      // Convert views into a dictionary with viewtag as key
      let views = {};
      for (let view of views_arr) {
        views[view._attributes.viewtag] = view;
      }

      this.cpview_conf$.next([menu, views]);
      this.isLoaded.next(true);
    }
  }

  loadFile(file) {
    this.fileReader.readAsText(file);

    return this.isLoaded;
  }

  loadFile2(file) {
    this.config = JSON.parse(xml2json(file, { compact: false }));
    let menu = this.config.elements[0].elements[0].elements;
    let views = this.config.elements[0].elements[1].elements;

    // Convert menus into a dictionary with menu name as key recursively and flatten the views in a menu to only contain view name
    menu = this._flatten_menu(menu);
    
    // Convert views into a dictionary with viewtag as key
    views = this._flatten_views(views);

    this.cpview_conf$.next([menu, views]);
    this.isLoaded.next(true);

    return this.isLoaded;
  }

  getConfig() {
    return this.cpview_conf$;
  }
  
  private _flatten_menu(menu) {
    let flattened_menu = [];
    for (let item of menu) {
      if (item.name == 'Menu') {
        flattened_menu.push({ [item.attributes.name]: this._flatten_menu(item.elements) });
      } else if (item.name == 'View' || item.name == 'DynamicView') {
        flattened_menu.push(item.attributes.viewtag);
      }
    }
    
    return flattened_menu;
  }
  
  private _flatten_views(views) {
    let flattent_views = {};
    for (let item of views) {
      flattent_views[item.attributes.viewtag] = item;
    }
    
    return flattent_views;
  }

  private _unflattent_menu(menu) {

  }

  private _unflattent_views(views) {

  }
  
  saveFile(menu, views) {
    this.config.elements[0].elements[0].elements = this._unflattent_menu(menu);
    this.config.elements[0].elements[1].elements = this._unflattent_views(views);
  }
  
}
