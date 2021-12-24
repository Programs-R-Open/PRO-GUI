import UIElement from './UIElement.js';
import Col from './Col.js';

export default class Card  extends Col{

	constructor(parent) {
		super(parent);

		this.style.margin = "10px";
		this.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
		
    	this.style.minWidth = "0";
    	this.style.wordWrap = "break-word";
   		this.style.backgroundColor = "#fff";
    	this.style.backgroundClip = "initial";
    	this.style.border = "1px solid rgba(0,0,0,.125)";
    	this.style.borderRadius = ".25rem";
	}

	setHeader(text) {
		this.header = new UIElement(this);
		this.header.style.borderRadius = "calc(.25rem - 1px) calc(.25rem - 1px) 0 0";
		this.header.style.padding = ".75rem 1.25rem";
		this.header.style.marginBottom = "0";
		this.header.style.backgroundColor = "rgba(0,0,0,.03)";
		this.header.style.borderBottom = "1px solid rgba(0,0,0,.125)";

		this.header.style.fontSize = "2.5rem";
		this.header.style.marginBottom = ".5rem";
		this.header.style.fontWeight = "500";
		this.header.style.lineHeight = "1.2";
		this.header.style.textAlign = "center";

		this.header.innerHTML = text;	
	}

}
customElements.define('pro-card', Card);
