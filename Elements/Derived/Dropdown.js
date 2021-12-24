import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";
import PopupMenu from "./PopupMenu.js";

/*

	Usage

	Parent: Parent Node
	Json: Json format:

		{
			"button1": ()=>{ doSomethig1(); },
			"button2": ()=>{ doSomethig2(); },
			"subMenu1": {
				"button3": ()=>{ doSomethig3(); },
				"button4": ()=>{ doSomethig4(); },
			}

		}

	Submenu feature not tested enough.


*/



export default class Dropdown extends UIElement {
	constructor(parent, json, arrow, def="Select one", direction) {
		super(parent);

		this.json = json;

		
		this.slct = def;

		this.showing = false;
		this.direction = direction;

		this.button = new Button(this, this.slct);

		this.button.setStyle("width", "100%");
		this.button.setStyle("userSelect", "none");
		this.button.setDisplay("block");

		this.button.isDown = true;

		this.selection = new PopupMenu(this);
		this.selection.onMenuSelected = name => this.select(name);		
		this.selection.setDisplay("block");
		this.selection.hide();
		this.selection.loadFromJson(json);
		
		document.body.addEventListener("click", (e)=>this.globalClick(e));
	}


	setJson(json) {
		this.json = json;
		this.selection.setJson(json);
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
		if(this.direction == 'up'){
			this.selection.setStyle("visibility", "hidden");
			this.selection.show(bounds.x, bounds.y);
			let childBounds = this.selection.getBoundingClientRect();
			this.selection.show(bounds.x, bounds.y - childBounds.height);
			this.selection.setStyle("visibility", "");

			this.selection.style.width = bounds.width + "px";
			this.showing = true;
		}else{
			this.selection.show(bounds.x, bounds.y + bounds.height);
			this.selection.style.width = bounds.width + "px";
			this.showing = true;
		}
	}

	select(name) {
		this.button.setText(name);
		this.slct = name;
		this.hide();
	}

	getValue() {
		return this.slct;
	}


	globalClick(e) {
		this.isInside({x: e.clientX, y: e.clientY}) ? this.toogle() : this.hide();
	}
}

customElements.define('pro-dropdown', Dropdown);