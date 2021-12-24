import UIElement from './UIElement.js';
import Button from './Button.js';
import List from './List.js';

export default class SearchList extends UIElement {

	constructor(parent) {
		super(parent)


		this.searchBar = document.createElement("input");
		this.appendChild(this.searchBar);
		this.searchBar.style.width = "calc(100% - 20px)";

		this.list = new List(this);
		this.list.setDisplay("block");
		
		this.setSearchbarHeight("40px");


		this.searchBar.addEventListener("input", ()=>{
			this.find();
		});
	}

	addItem(item, cb) {
		this.list.addItem(item, cb);
	}

	setItemListClass(itemListClass) {
		this.list.setItemListClass(itemListClass);
	}

	setSearchbarHeight(height) {
		this.searchBar.style.height = height;
		this.list.style.height = `calc(100% - ${height})`;
	}

	find() {
		let regex = new RegExp(this.searchBar.value);

		this.list.forEach(element => {
			if (regex.test(element.name)) element.show();
			else element.hide();
		})
	}

}

customElements.define('pro-search-list', SearchList);