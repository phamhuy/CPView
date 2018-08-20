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
	curViewTag: string;

	constructor(
		private fileService: FileService
	) { }

	ngOnInit() {
		this.fileService.getConfig().subscribe(([menu, views]) => {
			this.menu = menu;
			this.views = views;
		});
	}

	onChangeView(viewtag) {
		this.curViewTag = viewtag;
	}

	onClickSave() {
		this.fileService.saveFile();
	}

}