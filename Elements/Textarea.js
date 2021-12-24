import NativeElement from './NativeElement.js';

export default class Textarea extends NativeElement {
	constructor(parent = null) {
		super(parent, "textarea");
		this.element.style.width = "100%";
		this.style.display = "block";
		this.element.style.resize = "none";
	}

	setValue(value) {
		this.element.value = value;
	}

	appendValue(value) {
		this.element.value += value;
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

	setAutoSizing(bool) {

		this.element.style.minHeight = "100px";
		this.element.style.overflowY = "none";
		this.element.style.height = "100px";
		this.style.height = "118px";
		

		this.event("input", ()=>{
			this.element.style.height = "auto";
			this.element.style.height = this.element.scrollHeight + "px";
			this.style.height = this.element.style.height;

		});

	}

}

customElements.define("pro-textarea", Textarea);