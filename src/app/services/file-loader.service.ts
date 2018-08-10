import { Injectable } from '@angular/core';
import { xml2json } from 'xml-js';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  fileReader: FileReader = new FileReader();
  cpview_conf$: Subject<[any, any]> = new BehaviorSubject(null);
  isLoaded: Subject<boolean> = new ReplaySubject(1);

  constructor() {
    this.fileReader.onload = () => {
      let menu = JSON.parse(xml2json(this.fileReader.result, { compact: false })).elements[0];
      let views_arr = JSON.parse(xml2json(this.fileReader.result, { compact: true })).CPViewConfig.Views.View;

      // Convert menus into a dictionary with menu name as key recursively and flatten the views in a menu to only contain view name
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
  }

  getConfig() {
    return this.cpview_conf$;
  }

  private _flatten_menu(menu) {
    let flattened_menu = [];
    for (let elem of menu.elements) {
      if (elem.name == 'Menu' || elem.name == 'Menus') {
        flattened_menu.push({[elem.attributes.name]:this._flatten_menu(elem)};
      } else if (elem.name == 'View' || elem.name == 'DynamicView') {
        flattened_menu.push(elem.attributes.viewtag);
      }
    }

    return flattened_menu;
  }
}
