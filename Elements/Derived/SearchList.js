import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";
import List from "./List.js";

export default class SearchList extends UIElement {

	constructor(parent) {
		super(parent)


		this.searchBar = document.createElement("input");
		this.appendChild(this.searchBar);
		this.searchBar.style.width = "calc(100% - 40px)";

		this.list = new List(this);
		this.list.setDisplay("block");
		
		this.setSearchbarHeight(40);

		this.onButtonPress = () => {};

		this.searchBar.addEventListener("input", ()=>{
			this.find();
		});
	}


	addItem(item, cb) {
		this.list.addItem(item, () => {
			this.onButtonPress();
			cb();
		});
	}

	setItemListClass(itemListClass) {
		this.list.setItemListClass(itemListClass);
	}

	setSearchbarHeight(height) {
		this.searchBar.style.height = height + "px";
		this.list.style.height = `calc(100% - ${height + 30}px)`;
	}

	find() {
		let regex = new RegExp(this.searchBar.value, 'i');

		this.list.forEach(element => {
			if (regex.test(element.name)) element.show();
			else element.hide();
		})
	}

}

customElements.define('pro-search-list', SearchList);