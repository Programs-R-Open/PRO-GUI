import { PopupMenu } from './Elements/PopupMenu.js';
import { Button } from './Elements/Button.js';
import { UIElement } from './Elements/UIElement.js';

export class Toolbar extends UIElement {
	
	constructor() {
		super();
		
		this.setRow();
		this.addClass("bg-3");
		this.addClass("h-3v");
	}

	fromJson(json) {
		Object.entries(json).forEach(menu => {
			let popupMenu = new PopupMenu();
			popupMenu.loadFromJson(menu[1]);
			let menuButton = new Button(menu[0], ()=> {});
			menuButton.isDown = true;
			menuButton.appendChild(popupMenu);
			this.appendChild(menuButton);
		})
	}

	draw(element) {
		element.className.replace("hidden", "");
	}


	addMenu(name, cb) {
		let menu = new Button(name, cb);
		this.appendChild(menu);
	}


	setToolbar(json) {


	}

}

customElements.define('pro-toolbar', Toolbar);
