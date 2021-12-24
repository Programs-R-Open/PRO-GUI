import NativeElement from "../Native/NativeElement.js";

export default class Icon extends NativeElement {

	constructor(parent, path) {
		super(parent, "img");

		this.element.src = path;
	}

	setImg(path) {
		this.element.src = path;
	}
}

customElements.define('pro-icon', Icon);