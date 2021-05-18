import UIElement from './UIElement.js';

export default class Row extends UIElement {

	constructor() {
		super();
		this.setRow();
		this.style.flexWrap = "wrap";
	}
}

customElements.define('pro-row', Row);