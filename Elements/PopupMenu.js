import Button from './Button.js';
import UIElement from './UIElement.js';

export default class PopupMenu extends UIElement {


	constructor(parent, json="") {
		super(parent);

		this.hide();
		this.style.position = "absolute";
		this.style.zIndex = "100";

		if (json!="")
		this.loadFromJson(json);
	}

	loadFromJson(json) {
		this.a(json);
	}

	a (layer) {
		Object.entries(layer).forEach(kv => {
			let button = this.addButton(kv[0], (e)=>{e.stopPropagation()});
			if (kv[1] instanceof Function) {
				button.cb = kv[1];
			}else if (kv[1]  != "") {
				let popup = new PopupMenu(button);
				popup.a(kv[1]);
			} 

		});

	}


	addButton(name, cb) {
		let button = new Button(this, name, cb);
		button.setDisplay("block");
		return button;
	}



	show(x = 0, y = 0) {
		super.show();
		this.style.left = x + "px";
    	this.style.top = y + "px";
    	Array.from(this.children).forEach((child) => {
			child.show();
		})
	}


	hide() {
		super.hide();
		Array.from(this.children).forEach((child) => {
			child.hide();
		})
	}
}

customElements.define('pro-popup', PopupMenu);
