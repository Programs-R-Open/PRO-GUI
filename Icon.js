import { UIElement } from './Elements/UIElement.js';

export class Icon extends UIElement {

	constructor(path) {
		super();
		this.img = document.createElement("img");
		this.img.src = path;
		this.appendChild(this.img);
	}

	setImg(path) {
		this.img.src = path;
	}
}

customElements.define('pro-icon', Icon);