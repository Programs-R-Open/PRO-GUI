import UIElement from "../Native/UIElement.js";

export default class Row extends UIElement {

	constructor(parent = null) {
		super(parent);
		
		this.setRow();

		this.style.flexWrap = "wrap";

		this.colNumber = 12;

	}

	setCols(int) {
		this.colNumber = int;
	}

	append(child) {
		super.append(child);
		child.style.flexBasis = 100 / this.colNumber + "%";
	}
}

customElements.define('pro-row', Row);