import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";

export default class DropField extends UIElement {

	constructor(field, type) {
		super();


		this.onElementDroped;

		this.addClass("outline");
		this.setStyle("minHeight", "25px");
		this.setStyle("lineHeight", "25px");
		this.setFlex();

		this.button = new Button("+");
		this.appendChild(this.button);
		this.button.addClass("bg-2");
		this.button.setStyle("borderTopLeftRadius", "5px");
		this.button.setStyle("borderBottomLeftRadius", "5px");
		this.button.setFlexBasis("10px");

		this.dropField = new UIElement();
		this.appendChild(this.dropField);
		this.dropField.drop(e => this.onElementDroped(e));
		this.dropField.setFlexBasis("90px");

	}
}

customElements.define('pro-drop-field', DropField);