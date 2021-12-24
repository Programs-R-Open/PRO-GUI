

export default class NativeElement extends HTMLElement {
	constructor(parent = null, name) {
		super();

		if(parent != null) parent.appendChild(this);
		
		this.element = document.createElement(name);
		this.appendChild(this.element);
	}

	addClass(className) { 
		this.classList.add(...className);
	}

	setStyle(style, value) {
		this.style[style] = value;
	}

	setFlexBasis(per) {
		this.style.flexBasis = per;
	}

	event(name, cb) {
		this.element.addEventListener(name, cb);
	}
}

customElements.define("pro-native-element", NativeElement);