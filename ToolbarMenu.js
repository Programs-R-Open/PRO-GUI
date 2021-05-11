import { Button } from './Button.js';

export class ToolbarMenu {

	constructor(window, name, cb) {
		this.window = window;
		this.document = window.document;
		this.element = this.document.createElement("div");

		this.button = new Button(window, name, cb);

		this.popup
	}



	getElement() {
		return  this.element;
	}

}