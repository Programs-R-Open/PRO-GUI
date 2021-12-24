import UIElement from "./UIElement.js";
import Button from "./Button.js";

export default class Accordion extends UIElement{

	constructor(parent) {
		super(parent);
		this.buttonClasses = [];
	}

	setButtonClass(classes) {
		this.buttonClasses = classes;
	}

	addElement(name, text) {
		
		let element = new UIElement(this);

		let content = new UIElement();
		content.setDisplay("block");
		content.appendChild(text);
		content.hide();
		
		let button = new Button(element, name, ()=>{content.toggleVisibility()});
		button.setDisplay("block");
		button.addClass(this.buttonClasses);


		element.appendChild(content);
	}


}

customElements.define("pro-accordion", Accordion);