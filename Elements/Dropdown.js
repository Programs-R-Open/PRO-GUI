import UIElement from './UIElement.js';
import PopupMenu from './PopupMenu.js';
import Button from './Button.js';

export default class Dropdown extends UIElement {
	constructor(parent, json, arrow, def="Select one") {
		super(parent);

		let menus = {};
		json.forEach(item => menus[item] = () => this.select(item));
		
		this.slct = def;

		this.showing = false;

		this.button = new Button(this, this.slct, ()=>this.toogle());

		this.button.setStyle("width", "100%");
		this.button.setStyle("userSelect", "none");
		this.button.setDisplay("Block");

		this.button.isDown = true;

		this.selection = new PopupMenu(this);
		this.selection.loadFromJson(menus);
		
	}

	toogle() {
		if(this.showing) this.hide();
		else this.show();
	}

	hide() {
		this.selection.hide();
		this.showing = false;
	}

	show() {
		let bounds = this.getBoundingClientRect();
		this.selection.show(bounds.x, bounds.y + bounds.height);
		this.selection.style.width = bounds.width + "px";
		this.showing = true;
	}

	select(type) {
		this.slct = type;
		this.button.setText(this.slct);
		this.selection.hide();
	}

	getValue() {
		return this.slct;
	}
}

customElements.define('pro-dropdown', Dropdown);