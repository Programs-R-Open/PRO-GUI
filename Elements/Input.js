import UIElement from './UIElement.js';

export default class Input extends UIElement {

	constructor() {
		super();

		this.element = document.createElement("input");
		this.appendChild(this.element);
		this.event = this.element.addEventListener;
	}

	
	setValue(text) {
		this.element.value = text;
	}

	getValue() {
		return this.element.value;
	}



}

customElements.define('pro-input', Input);