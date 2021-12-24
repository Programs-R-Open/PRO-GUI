import UIElement from './UIElement.js';

export default class Input extends UIElement {

	constructor(parent, label="", def="", cb = ()=>{}) {
		super(parent);


		if (label != "") {
			this.label = new UIElement();
			this.label.innerHTML = label;
			this.label.style.display = "block";
			this.label.style.lineHeight = "50px";
			this.label.style.width = "100%";
			this.label.style.textAlign = "center";
			this.appendChild(this.label);
		}


		this.element = document.createElement("input");
		this.element.addEventListener("input", cb);
		//this.element.style.width = "calc(100% - 20px)";
		this.appendChild(this.element);

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