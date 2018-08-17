import { Injectable } from '@angular/core';
import { xml2json, json2xml, js2xml } from 'xml-js';
import { Subject, BehaviorSubject } from 'rxjs';
import * as FileSaver from 'file-saver';

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
			this.config = JSON.parse(xml2json(this.fileReader.result, { compact: false }));
			let menu = this.config.elements[0].elements[0].elements;
			let views = this.config.elements[0].elements[1].elements;

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

		this.cpview_conf$.next([menu, views]);
		this.isLoaded.next(true);

		return this.isLoaded;
	}

	getConfig() {
		return this.cpview_conf$;
	}

	saveFile() {
		let xml_text = js2xml(this.config, {compact: false, spaces: '\t'});
		let xml_file = new Blob([xml_text], { type: 'text/plain;charset=utf-8' });
		FileSaver.saveAs(xml_file, 'cpview_conf.xml');
	}

}
