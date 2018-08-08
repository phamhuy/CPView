import { Injectable } from '@angular/core';
import { xml2json, json2xml } from 'xml-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  cpview_conf$ : Observable<[any, any]> = new Observable();

  constructor() { }

  loadFile(file) {
    this.cpview_conf$ = new Observable(observer => {
      let fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = () => {
        let cpview_conf = JSON.parse(xml2json(fileReader.result, {compact: true}));
        let menus = cpview_conf.CPViewConfig.Menus; delete menus._attributes;
        let views_arr = cpview_conf.CPViewConfig.Views.View;

        // Convert views into a dictionary with viewtag as key
        let views = {};
        for (let view of views_arr) {
          views[view._attributes.viewtag] = view;
        }

        // Convert menus into a dictionary with viewtag or menu name as key recursively
        let menu = this._flatten_menu(menus);

        observer.next([menu, views]);
      }
    });

  }

  getConfig() {
    return this.cpview_conf$;
  }

  private _flatten_menu(menus) {
    let flattened_menu = {};

    // Process the child Menu
    if ('Menu' in menus) {
      let Menu = menus['Menu'];
      if (Array.isArray(Menu)) {
        for (let menu of Menu) {
          flattened_menu[menu._attributes.name] = this._flatten_menu(menu);
        }
      } else {
        flattened_menu[Menu._attributes.name] = this._flatten_menu(Menu);
      }
    }

    // Process the child Views
    if ('View' in menus || 'DynamicView' in menus) {
      let View = menus[('View' in menus) ? 'View' : 'DynamicView'];
      let views = [];
      if (Array.isArray(View)) {
        for (let view of View) {
          views.push(view._attributes.viewtag);
        }
      } else {
        views.push(View._attributes.viewtag);
      }
      flattened_menu["Views"] = views;

    }

    return flattened_menu;
  }
}
