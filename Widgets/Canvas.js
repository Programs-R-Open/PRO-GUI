import { Widget } from './Widget.js'; 

export class Canvas extends Widget {

	constructor(id) {
		super(id);


		this.canvas = document.createElement("canvas");
		this.canvas.style.width= "800px";
		this.gl = this.canvas.getContext("webgl2");
		this.canvas.setAttribute('tabindex','0');

		if (!this.gl) {
    		return;
  		}

		this.body.appendChild(this.canvas);

		this.eventCallback = (e) => {};

  		this.onEvent = (e)=>{this.eventCallback(e)};
  		this.onResized = (e)=>{
  			let dim = e.getBoundingClientRect();
  			this.canvas.style.height = dim.height;
  			this.canvas.style.width = dim.width;
  		}

		this.canvas.requestPointerLock = this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock;
		
		this.canvas.onclick = this.onEvent;
		this.canvas.onmouseover = this.onEvent;
  		this.canvas.onmouseout = this.onEvent;
  		this.canvas.onmousemove = this.onEvent;
  		this.canvas.onkeydown = this.onEvent;
  		this.canvas.onkeyup = this.onEvent;

	}

	setEvents() {

	}


	getGL() {
		return this.gl;
	}
}

customElements.define('pro-canvas', Canvas);
