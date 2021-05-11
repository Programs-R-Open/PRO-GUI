import UIElement from './UIElement.js';
import IntField from './IntField.js';

export class VectorField extends UIElement {


	constructor(vector3) {
		super();
		
		this.vector3 = vector3;
		this.xInput = new IntField(vector3.x);
		this.yInput = new IntField(vector3.y);
		this.zInput = new IntField(vector3.z);

		this.xInput.onIntChange = (newInt)=>{ this.vector3.x = newInt};
		this.yInput.onIntChange = (newInt)=>{ this.vector3.y = newInt};
		this.zInput.onIntChange = (newInt)=>{ this.vector3.z = newInt};

	
		this.addClass("row");

		this.appendChild(this.xInput);
		this.appendChild(this.yInput);
		this.appendChild(this.zInput);
	}
}

customElements.define('pro-vector-field', VectorField);