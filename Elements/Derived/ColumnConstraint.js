import UIElement from "../Native/UIElement.js";

export default class ColumnConstraint extends UIElement{

	constructor(parent, percentage) {
		super(parent);
		this.style.display = "block";
		this.style.width = percentage;
		this.style.margin = `0 calc((100% - ${percentage}) / 2)`;
	}
}

customElements.define('pro-column-constraint', ColumnConstraint);