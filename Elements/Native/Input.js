import NativeElement from './NativeElement.js';
import UIElement from './UIElement.js';

export default class Input extends NativeElement {

	constructor(parent, label="", def="", cb = ()=>{}) {
		super(parent, "input");


		if (label != "") {
			this.label = new UIElement();
			this.label.innerHTML = label;
			this.label.style.display = "block";
			this.label.style.lineHeight = "50px";
			this.label.style.width = "100%";
			this.label.style.textAlign = "center";
			this.prepend(this.label);
		}


		this.element.addEventListener("input", cb);
		//this.element.style.width = "calc(100% - 20px)";
		
		this.addEventListener = this.element.addEventListener;

		if (def != "") this.element.value = def;

		this.event = this.addEventListener;

	}
	
	setValue(text) {
		this.element.value = text;
	}

	setType(type) {
		this.element.type = type;
	}

	setWidth(width) {
		this.element.style.width = width;
	}

	setHeight(height) {
		this.element.style.height = height;
	}

	getValue() {
		return this.element.value;
	}

}

customElements.define('pro-input', Input);