import UIElement from './UIElement.js';
import Button from './Button.js';

export default class List extends UIElement {

	constructor(parent) {
		super(parent)
		this.list = [];
		this.style.overflowY = "auto";
	}

	addItem(item, cb) {
		let button = new Button(this, item, cb);
		
		button.setDisplay("block");
		
		if (this.itemListClass) button.addClass(this.itemListClass)
		
		this.list.push(button);
	}

	addItems(list, cb) {
		list.forEach(item => addItem(item, ));
	}

	setItemListClass(itemListClass) {
		this.itemListClass = itemListClass;
	}

	forEach(callback) {
		this.list.forEach(callback);
	}



}

customElements.define('pro-list', List);
