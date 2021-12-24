import UIElement from './UIElement.js';

export default class ScrolleablePanel extends UIElement {

	constructor(parent, type = "vertical") {
		super(parent);
		
		this.style.display = "flex";

		if (type == "vertical") {
			this.style.height = "100%";
			this.style.overflowY = "auto";
			this.style.flexDirection = "column";
		}
		if (type == "horizontal") {
			this.style.width = "100%";
			this.style.overflowX = "auto";
			this.style.flexDirection = "row";
		}
	}

	appendChild(child) {
		child.style.flex = "0 0 auto";
		super.appendChild(child)
	}



}
customElements.define('pro-scrolleable-panel', ScrolleablePanel);