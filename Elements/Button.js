import UIElement from './UIElement.js';

export default class Button extends UIElement {

	constructor(parent, name, cb = ()=>{}, child = null) {
		super(parent);

		this.name = name;
		this.cb = cb;
		this.isDown;

		this.style.cursor = "pointer";
		this.event("click", this.onClick.bind(this));
		document.body.addEventListener("click", this.hideChildren.bind(this) );

		this.text = new UIElement();
		super.appendChild(this.text);
		this.text.innerHTML = name;

		this.child = new UIElement();	
		super.appendChild(this.child);
		if (child) this.child.appendChild(child);

	}

	onClick(e) {
		e.preventDefault();
		if(this.hasChildren()) {
			var bodyRect = document.body.getBoundingClientRect();
			let elemRect = this.getBoundingClientRect();
			let top = elemRect.top - bodyRect.top;
    		let left = elemRect.left - bodyRect.left
			
			if (this.isDown) {
				top += elemRect.height;
			}
			else {
    			left +=  elemRect.width;
			}
			this.child.show(left, top);

		}

		this.cb(e);
	}

	setCb(cb) {
		this.cb = cb;
	}

	setText(text) {
		this.text.innerHTML = text;
	}

	hasChildren() {
		return this.child.children.length > 0;
	}

	hideChildren(e) {
		if(this.contains(e.target)) return; 
		if (e.target != this && this.hasChildren() ) 
			this.child.children[0].hide();
	}

	toggleChildren() {
		this.child.toggleVisibility();
	}

	showChild() {
		this.child.show()
	}

	appendChild(child) {
		this.child.appendChild(child);
	}
}

customElements.define('pro-button', Button);

