import UIElement from './UIElement.js';

export default class Card  extends UIElement{

	constructor() {
		super();

		this.style.borderRadius = "20px";
		this.style.padding = "20px";
		this.style.margin = "10px";
		this.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
	}

}
customElements.define('pro-card', Card);
