import { Widget } from './Widget.js';
import { Button } from '../Elements/Button.js'; 
import { UIElement } from '../Elements/UIElement.js';
import { PopupMenu } from '../Elements/PopupMenu.js';
import { RewriteableString } from '../Elements/RewriteableString.js';
import { TreeMenu } from '../Elements/TreeMenu.js';

import { Renderer3DComponentView, Renderer3DComponent, 
		 TransformComponent, TransformComponentView,
		 CameraComponent, CameraComponentView } from '../../ECS/Component.js';

export class Properties extends Widget {

	constructor(id) {
		super(id);

		let compmenu = {
			"Core":{
				"Transform": () => { this.entity.addComponent(new TransformComponent()); this.draw(this.entity) }
			},
			"3D Graphics": {
				"3D Renderer" : () => { this.entity.addComponent(new Renderer3DComponent()); this.draw(this.entity) }
			},
			"b":"",
			"c":"",
		};


		this.onEntityChanged = ()=>{};
		this.entity;

		this.name = new RewriteableString("");
		this.body.appendChild(this.name);
		this.name.onTextChanged = (newText) => { this.entity.name = newText;};
		
		this.list = new UIElement();
		this.body.appendChild(this.list);


		this.treeMenu = new TreeMenu(compmenu);
		this.button = new Button("Add Component", ()=>{}, this.treeMenu);
		this.body.appendChild(this.button);
		this.button.addClass("m-10");
		this.button.addClass("round-button");
		this.button.isDown = true;
		this.button.hide();
		


		this.popup = new PopupMenu();

	}


	draw(entity) {
		this.entity = entity;
		this.button.hide();
		if (entity == null ||entity == undefined) return;
		this.button.show();
		this.list.innerHTML = "";
		this.name.setText(entity.name);

		entity.components.forEach((component) => {
			let comp;

			if (component instanceof Renderer3DComponent) {
				comp = new Renderer3DComponentView(component);
			}else if (component instanceof TransformComponent) {
				comp = new TransformComponentView(component);
			} else if (component instanceof CameraComponent) {
				comp = new CameraComponentView(component);
			}
			this.list.appendChild(comp);
		});
	}
}

customElements.define('pro-properties', Properties);