import UIElement from "./UIElement.js";

export default class NativeElement  extends UIElement {
	constructor(parent = null, name) {
		super(parent)
		
		this.element = document.createElement(name);
		this.append(this.element);

		this.append = child=>this.element.append(child);

	}

	addClass(className) {
		this.element.classList.add(...className);
	}

	setStyle(style, value) {
		this.element.style[style] = value;
	}

	setFlexBasis(per) {
		this.style.flexBasis = per;
	}

	event(name, cb) {
		this.element.addEventListener(name, cb);
	}

	clear() {
		this.element.value = "";
	}

}

customElements.define("pro-native-element", NativeElement);