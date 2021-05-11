import { UIElement } from './UIElement.js';

export class Topbar extends UIElement{
	
	constructor(window) {
		super(window);

		this.onAddEvent = ()=>{};
		this.init();
	}


	init() {
		this.addClass("topBar");
		this.addClass("dir-l");

		var add =new UIElement(this.window);
		add.addClass("w-20px");
		add.addClass("button");
		add.element.innerHTML = "+";
		add.event("click", ()=>{this.onAddEvent()});

		this.appendChild(add);
		
	}

}