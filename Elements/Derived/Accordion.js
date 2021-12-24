import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";

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

	setJson(jsonArray) {
		this.clear();

		jsonArray.forEach( jsonObject => {
			this.addElement(jsonObject.name, new UIElement(null, jsonObject.value));
		});
	}


}

customElements.define("pro-accordion", Accordion);