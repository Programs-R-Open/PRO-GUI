import NativeElement from './NativeElement.js';

export default class SVG extends NativeElement {
	
	constructor(parent, path) {
		super(parent, "svg");

		this.element.setAttribute("viewBox", "0 0 40 40");


		this.use = document.createElement("use");
		this.append(this.use);

		this.use.setAttribute("href", path);

	}

	setImg(path) {
		this.use.setAttribute("href", path);
	}

}

customElements.define("pro-svg", SVG);