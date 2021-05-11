import { UIElement } from './Elements/UIElement.js';
import { Icon } from './Icon.js';

export class FileView  extends UIElement{

	constructor(file) {
		super();

		this.file = file;
		this.setStyle("color", "white");
		this.addClass("m-15");

		this.openFile = ()=>{};



		this.img = new Icon("../../SVG/file.svg");
		this.img.addClass("menuItem");
		this.img.draggable = "true";
		this.img.drag(this.dragStart.bind(this));
		this.img.event("dblclick", () => this.openFile(this.file));
		
		this.name = document.createElement("div");
		this.name.innerHTML = file.name;
		this.name.classList.add("menuItem");


		this.appendChild(this.img);
		this.appendChild(this.name);
	}


	dragStart (e) {

		e.dataTransfer.setData("text/plain", this.file.id);
		e.dataTransfer.dropEffect = "copy";
	}
}

customElements.define('pro-file-view', FileView);
