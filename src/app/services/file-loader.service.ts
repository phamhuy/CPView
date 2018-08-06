import { Injectable } from '@angular/core';
import { xml2json, json2xml } from 'xml-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor() { }

  loadFile(file) : Observable<[any, Array<any>]> {
    let fileReader = new FileReader();
    fileReader.readAsText(file);

    return Observable.create(observer => {
      // If success
      fileReader.onload = () => {
        let cpview_conf = JSON.parse(xml2json(fileReader.result, {compact: true}));
        let menus = cpview_conf.CPViewConfig.Menus.Menu;
        let views_arr = cpview_conf.CPViewConfig.Views.View;

        // Convert views into a dictionary with viewtag as key
        let views = {};
        for (let view of views_arr) {
          views[view._attributes.viewtag] = view;
        }
        observer.next([menus, views]);
      };

      // If failed
      fileReader.onerror = (err) => observer.error(err);

    });
  }
}
