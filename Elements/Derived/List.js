import UIElement from "../Native/UIElement.js";
import ScrolleablePanel from "./ScrolleablePanel.js"
import Button from "../Native/Button.js";

export default class List extends ScrolleablePanel {

	constructor(parent) {
		super(parent)
		this.list = [];
		this.style.overflowY = "auto";
	
		this.onButtonPress = ()=>{};
	}

	addItem(item, cb) {
		let callBack = ()=>{
			this.onButtonPress();
			cb();
		}

		let button = new Button(this, item, callBack);
		
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
