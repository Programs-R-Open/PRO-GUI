import UIElement from './UIElement.js';
import Button from './Button.js';

export default class List extends UIElement {

	constructor() {
		super()
		this.itemListClass = "itemList";
	}

	addItem(item, cb) {
		//let row = new UIElement();
		//row.addClass(this.itemListClass);
		let name = new Button(item, cb);
		name.addClass(this.itemListClass);
		//let button = new Button("X", ()=>{this.row.remove()});
		
		//row.setRow();
		//row.appendChild(name);
		//row.appendChild(button);
		
		this.appendChild(name);
	}

	setItemListClass(itemListClass) {
		this.itemListClass = itemListClass;
	}



}

customElements.define('pro-list', List);
