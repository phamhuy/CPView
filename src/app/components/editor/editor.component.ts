import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
	menu: any;
	views: any;
	orig_views: any;
	currentView: any;

	constructor(
		private fileService: FileService
	) { }

	ngOnInit() {
		this.fileService.getConfig().subscribe(([menu, views]) => {
			this.menu = menu;
			this.orig_views = views;
			this.views = this._flatten_views(views);
		});
	}

	onChangeView(viewtag) {
		this.currentView = this.views[viewtag];
	}

	onClickSave() {
		this.fileService.saveFile();
	}

	private _flatten_views(views) {
		let flattent_views = {};
		for (let item of views) {
			flattent_views[item.attributes.viewtag] = item;
		}

		return flattent_views;
	}

	private _unflatten_views() {

	}

}