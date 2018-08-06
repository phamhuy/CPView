import { Injectable } from '@angular/core';
import { xml2json, json2xml } from 'xml-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  cpview_conf$ : Observable<[any, any]>;

  constructor() { }

  loadFile(file) {
    this.cpview_conf$ = new Observable(observer => {
      let fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = () => {
        let cpview_conf = JSON.parse(xml2json(fileReader.result, {compact: true}));
        let menus = cpview_conf.CPViewConfig.Menus;
        let views_arr = cpview_conf.CPViewConfig.Views.View;

        // Convert views into a dictionary with viewtag as key
        let views = {};
        for (let view of views_arr) {
          views[view._attributes.viewtag] = view;
        }

        observer.next([menus, views]);
      }
    });

  }

  getConfig() {
    return this.cpview_conf$;
  }
}
