import UIElement from "../Native/UIElement.js";
import Input from "../Native/Input.js";

export default class RewriteableString extends UIElement {

	constructor(parent, text, validation = null) {
		super(parent);

		if(validation) this.validation = validation 

		this.text = new UIElement(this);
		this.text.innerHTML = text;
		this.text.hide();
		this.text.addEventListener("dblclick", ()=>this.edit()); 
		
		
		this.input = new Input(this);
		this.input.setValue(text);
		this.input.event("keypress", (e)=>this.onInput(e));
		

		this.onTextChanged = ()=>{};
		this.onEditDone = ()=>{};

		document.body.addEventListener("click", e=>this.globalClick(e));

	}

	globalClick(e) {
		this.isInside({x: e.clientX, y: e.clientY}) ? ()=>{} : this.stopEdit();
	}

	setText(text) {
		this.onTextChanged(text);
		this.text.innerHTML = text;
		this.input.setValue(text);
	}

	getText() {

	}

	edit() {
		this.text.hide();
		this.input.show();
	}


	onInput(e) {
		this.onTextChanged(this.input.getValue());
		if (e.keyCode != 13) return;
		if (this.validation != null)
			if(this.validation(this)) return;

		this.text.innerHTML = this.input.getValue();
		this.stopEdit();
	}

	stopEdit() {
		if (this.text.innerHTML == "") return; 

		this.input.hide();
		this.text.show();
		this.onEditDone();
	}
}

customElements.define('pro-rewriteable-string', RewriteableString);