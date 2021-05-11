import UIElement from './UIElement.js';
import PopupMenu from './PopupMenu.js';
import Button from './Button.js';

export default class Dropdown extends UIElement {
	constructor(json, arrow, def="Select one") {
		super();
		
		this.slct = def;
		this.button = new Button(this.slct, ()=>{this.selection.show()});
		this.appendChild(this.button);
		this.button.isDown = true;

		this.selection = new PopupMenu();
		this.appendChild(this.selection);		
		let menus = {};
		json.forEach(item => menus[item] = () => this.select(item));
		this.selection.loadFromJson(menus);
	}

	select(type) {
		this.slct = type;
		this.button.setText(this.slct);
		this.selection.hide();
	}

}

customElements.define('pro-dropdown', Dropdown);