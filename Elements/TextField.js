import UIElement from '../Elements/UIElement.js';

export default class TextField extends UIElement {
	constructor() {
		super();

		this.setAttribute("tabindex", "0");
		this.addClass("p-10");

		this.onKeyDown = () => {};
		this.onNewLine =() => {};
		this.onBackspace = () => {this.backspace()};
		this.onArrowUp = ()=>{};

		this.data = "";

		this.event("keydown", (e) => {
			console.log(e);
			switch(e.keyCode) {
				
				case 8://Backspace
					this.onBackspace(this);
					break;
				
				case 13://Enter
					this.data += "\\n";
					this.onNewLine(this);
				
				case 18://Alt
					break;

				case 38://ArrowUp
					this.onArrowUp(this);
					break;
				
				default:	
					this.data += e.key;
					break;
			}
			this.draw();
			this.onKeyDown();
		});

		this.event("click", (e)=>{
		});
	}

	backspace() {
		this.data = this.data.slice(0,-1);
	}

	insert(value) {
		this.data += value;
		this.draw();
	}

	draw() {
		this.clear();
		let lines = this.data.split("\\n");
		lines.forEach(line => {
			let l = new UIElement();
			this.appendChild(l);
			l.innerHTML = line;
		})

	}
}

customElements.define('pro-text-field', TextField);
