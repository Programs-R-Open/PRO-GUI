import { Widget } from './Widget.js';
import { Button } from '../Elements/Button.js';
import { PopupMenu } from '../Elements/PopupMenu.js'

export class Inspector extends Widget {

	constructor(id) {
		super(id);

		this.entities = [];

		this.onEntityClicked;

		let contextMenu = {
			"New":{
				"Empty":"",
				"Box":""
			}		
		}

		this.popup = new PopupMenu(contextMenu);
		this.appendChild(this.popup);
		this.body.contextMenuInit();

		this.body.onContextMenuShow = e => {
			this.popup.show((e.pageX - 10), (e.pageY - 10));
		}	

		this.body.onContextMenuHide = () => {
			this.popup.hide();
		}




	}

	draw(entities) {
		let currentEntities = JSON.parse(JSON.stringify(entities));
		if (JSON.stringify(this.entities) == JSON.stringify(currentEntities)) return;
		this.entities = currentEntities;
			

		this.body.clear();
		
		Object.values(entities).forEach((entity)=>{
			let button = new Button(entity.id + ": " + entity.name, () => {
				this.onEntityClicked(entity);
			});

			button.contextMenuInit();
			button.onContextMenuShow = ()=>{};
			button.onContextMenuHide = ()=>{};


			this.body.appendChild(button);

		});
	}
}

customElements.define('pro-inspector', Inspector);