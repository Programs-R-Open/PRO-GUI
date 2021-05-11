import { File } from "../../Data/File.js";
import { Folder } from "../../Data/Folder.js";

import { FileView } from '../FileView.js';
import { FolderView } from '../FolderView.js';
import { Widget } from './Widget.js';
import { PopupMenu } from '../Elements/PopupMenu.js';

import { UIElement } from '../Elements/UIElement.js';


export class FileMenu extends Widget {

	constructor(id) {
		super(id);

		this.files = [];
		this.upqueue = [];
		this.uplock = false;

		this.body.addClass("row");
		this.body.addClass("p-10");
		this.body.drop(this.onElementDroped);


		let contextMenu = {
			"Nuevo":{
				"Archivo":()=>{this.addFile()},
				"Carpeta":()=>{this.addFolder()}
			} 
		};

		this.popup = new PopupMenu(contextMenu);
		this.appendChild(this.popup);

		this.addFile = () => {};
		this.openFile = () => {};
		this.addFolder = () => {};
		this.onFileReaded = () => {};
		//this.hform = document.getElementById("upform");
		
		this.contextMenuInit();

	}


	draw(files) {
		let currentFiles = [...files];
		if (JSON.stringify(this.files) == JSON.stringify(currentFiles)) return;
		this.files = currentFiles;

		this.body.clear();

		Object.values(this.files).forEach((item)=> {
			let element;

			if( item instanceof Folder){
				element = new FolderView(item);
			}else if (item instanceof File) {
				element = new FileView(item);
				element.openFile = this.openFile;
			} else {
				console.log("Error: FileMenu: item is not File or Folder");
			}

			this.body.appendChild(element);
		});
	}

	onElementDroped(e) {
		let files = data.files;
		
		for (let f of files) {
			this.upqueue.push(f);


			let file = new File("");
			var reader = new FileReader();
			
			reader.onload = (e) => {
				this.onFileReaded(e.target.result);
				file.fromJson({
					name : f.name,
					data: e.target.result,
				});

				this.addFile(file);
			}

			
			reader.readAsText(f);
		}
	}


	onContextMenuShow(e) {
		this.popup.show((e.pageX - 10), (e.pageY - 10));
	}

	onContextMenuHide() {
		this.popup.hide();
	}

}

customElements.define('pro-file-menu', FileMenu);
