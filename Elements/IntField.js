import UIElement from './UIElement.js';
import Icon from '../Icon.js';

export default class IntField extends UIElement {

	constructor(int) {
		super();

		this.onIntChange;



		this.handler = new UIElement();
		this.handler.sliding = false;
		this.handler.style.height = "10px";
		this.handler.style.backgroundImage = "url('../../../SVG/caret-y.svg')";
		this.handler.classList.add("unselectable");
		this.handler.addClass("w-20px");
		this.handler.event("mousedown", (e) => {
			this.handler.sliding = true;
			this.handler.pos = {x:e.clientX, y:e.clientY};
		});

		this.requestPointerLock = this.requestPointerLock || this.mozRequestPointerLock;

		this.requestPointerLock()

		document.addEventListener("mouseup", ()=>{this.handler.sliding = false});
		document.addEventListener("mousemove", (e)=>{
			if(this.handler.sliding) {
				let dx = (e.clientX - this.handler.pos.x) * 0.01;
				this.handler.pos.x = e.clientX; 
				this.value.value = parseFloat(this.value.value) + dx;
				this.setNumber(parseFloat(this.value.value));
			} 
		});

		this.value = document.createElement("input");
		this.value.classList.add("bg-3");
		this.value.value = int;
		this.value.style.width = "calc(100% - 20px)";
		this.value.addEventListener("keyup", this.onKeyPressed.bind(this));
		this.value.addEventListener("keydown", this.onKeyPressed.bind(this));


		this.appendChild(this.handler);
		this.appendChild(this.value);
		this.addClass("row");
		this.addClass("py-10");
	}

	setNumber(num) {
		this.onIntChange(num);
	}

	onKeyPressed(e) {
		if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 8 || e.keyCode == 190) {
			if(e.type =="keyup") {
				this.setNumber(parseFloat(this.value.value));
			}
		} else {
			e.preventDefault();
			e.stopPropagation();
		}	
	}

	onSlidingHandler() {

	}
}

customElements.define('pro-int-field', IntField);