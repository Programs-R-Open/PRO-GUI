import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";


/*

	Usage:

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

*/


export default class PopupMenu extends UIElement {


	constructor(parent, json="") {
		super(parent);

		this.hide();
		this.style.position = "absolute";
		this.style.zIndex = "100";

		if (json!="")
		this.loadFromJson(json);

		this.onMenuSelected = name => {};
	}


	loadFromJson (json) {
		Object.entries(json).forEach(([name, cb])=> {
			let button = this.addButton(name, (e)=>{e.stopPropagation(); this.onMenuSelected(name);});
			if (cb instanceof Function) {
				button.cb = ()=> { this.onMenuSelected(name); cb(); };
			}else if (cb  != "") {
				let popup = new PopupMenu(button);
				//popup.loadFromJson(kv[1]);
			} 

		});
	}

	setJson(json) {
		this.clear();
		this.loadFromJson(json);
	}



	addButton(name, cb) {
		let button = new Button(this, name, cb);
		button.setDisplay("block");
		return button;
	}



	show(x = 0, y = 0) {
		super.show();
		this.style.left = x + "px";
		this.style.top = y + "px";
    	Array.from(this.children).forEach((child) => {
			child.show();
		})
	}


	hide() {
		super.hide();
		Array.from(this.children).forEach((child) => {
			child.hide();
		})
	}
}

customElements.define('pro-popup', PopupMenu);
