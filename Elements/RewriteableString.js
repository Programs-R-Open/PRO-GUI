import UIElement from './UIElement.js';
import Input from './Input.js';

export default class RewriteableString extends UIElement {

	constructor(text) {
		super();

		this.text = new UIElement();
		this.appendChild(this.text);
		this.text.innerHTML = text;
		this.text.hide();
		this.text.addEventListener("dblclick", this.edit.bind(this)); 
		
		
		this.input = new Input();
		this.appendChild(this.input);
		this.input.setValue(text);
		this.input.event("keypress", this.onInput.bind(this));
		

		this.onTextChanged = ()=>{};

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
		this.text.innerHTML = this.input.getValue();
		this.input.hide();
		this.text.show();
	}


}

customElements.define('pro-rewriteable-string', RewriteableString);