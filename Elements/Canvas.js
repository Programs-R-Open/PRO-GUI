import UIElement from './UIElement.js'; 

export default class Canvas extends UIElement {

	constructor(parent = null) {
		super(parent);

		this.style.display = "block";
		this.element = document.createElement("canvas");
		this.appendChild(this.element);
		
		this.onUpdate = delta => {};
	}

	setWidth(width) {
		super.setWidth(width);
		this.element.style.width = this.getBoundingClientRect().width + "px";
	}

	setHeight(height) {
		super.setHeight(height);
		this.element.style.height = this.getBoundingClientRect().height + "px";
	}

	getGL() {
		this.gl = this.element.getContext("webgl") || this.element.getContext("experimental-webgl");
		return this.gl;
	}

	run() {
		window.requestAnimationFrame(this.loop.bind(this));
	}

	loop() {
		let time = performance.now();
		this.delta = (time - this.lastFrameTime) / 1000;
		this.lastFrameTime = time;

		this.onUpdate(this.delta);

		window.requestAnimationFrame(this.loop.bind(this));
	} 

}

customElements.define('pro-canvas', Canvas);
