import UIElement from './UIElement.js';

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

	appendChild(child) {
		super.appendChild(child);
		child.style.flexBasis = 100 / this.colNumber + "%";
	}
}

customElements.define('pro-row', Row);