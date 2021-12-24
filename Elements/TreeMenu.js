import UIElement from './UIElement.js';
import Button from './Button.js';

export default class TreeMenu extends UIElement {

	constructor(json) {
		super();

		this.json = json;
		this.currentMenu = [];
		this.itemListClass = "itemList";

		//Events
		this.onActionSelected = ()=>{};
		this.actionInfo = [];


		this.draw();
	}

	draw() {
		this.clear();

		if (this.currentMenu.length > 0 ) {
			let button = new Button("<=", () => {this.currentMenu.pop(); this.draw(); })
			button.addClass(this.itemListClass);
			this.appendChild(button);
		}
		
		this.calculateMenu().forEach((menu, index)=>{
			let button = new Button(menu.name);
			button.addClass(this.itemListClass);

			if (menu.hasOwnProperty("func")) button.setCb(() => {menu.func(...this.actionInfo); this.onActionSelected() });
			else button.setCb(()=> { this.currentMenu.push(index); this.draw();});

			this.appendChild(button);
		});
	}


	show(x, y) {
		super.show();
		this.setLeft(x + "px");
		this.setTop(y + "px");
		this.draw();
	}

	hide() {
		super.hide();
		this.currentMenu = [];
	}

	calculateMenu() {
		let json = this.json;
		this.currentMenu.forEach((menu)=>{
			json = json[menu].menus;
		})

		return json;
	}

	setItemListClass(itemListClass) {
		this.itemListClass = itemListClass; 
	}
}
customElements.define('pro-tree-menu', TreeMenu);