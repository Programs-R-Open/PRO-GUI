import UIElement from "../Native/UIElement.js";

export default class Col extends UIElement {

	constructor(parent) {
		super(parent);
		this.setCol();
		this.style.flexWrap = "wrap";
	}
}

customElements.define('pro-col', Col);