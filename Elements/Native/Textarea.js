import NativeElement from './NativeElement.js';

export default class Textarea extends NativeElement {
	constructor(parent = null) {
		super(parent, "textarea");
		this.element.style.width = "calc(100% - 15px)";
		this.element.style.height = "calc(100% - 30px)";
		this.style.display = "block";
		this.element.style.resize = "none";
	}

	addEventListener(name, cb) {
		this.element.addEventListener(name, cb);
	}

	setValue(value) {
		this.element.value = value;
		this.update();
	}

	appendValue(value) {
		this.element.value += value;
		this.update();
	}

	getValue() {
		return this.element.value;
	}

	setRows(value) {
		this.element.rows = value;
	}

	setHeight(height) {
		this.element.style.height = height;
	}

	setStyle(style, value) {
		this.style[style] = value;
	}

	setAutoSizing(bool) {

		this.element.style.minHeight = "100px";
		this.element.style.overflowY = "none";
		this.element.style.height = "auto";
		this.style.height = "118px";
		this.style.height = this.element.style.height;

		this.element.addEventListener("input", ()=>{
			this.element.style.height = "auto";
			this.element.style.height = this.element.scrollHeight + "px";
			this.style.height = this.element.style.height;
		});
	}

	update() {
		this.style.height = this.element.style.height;
	}
}

customElements.define("pro-textarea", Textarea);