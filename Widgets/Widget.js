import { UIElement } from '../Elements/UIElement.js';

export class Widget extends UIElement {

	constructor(id) {
		super();
		this.id = id;

		this.default();
		this.topbar();
		this.body();
		this.bottombar();
		
	}


	default() {
		this.setCol();
		this.setWidth(200);
		this.setHeight(200);
		this.addClass("bg-3");
		this.setStyle("zIndex", "25");
		this.setStyle("top", "25px");
		this.setStyle("left", "25px");

		this.undock();

		this.drag((e) => {
			let [x , y] = [ e.clientX , e.clientY ];

			if (this.isDocked()) this.undock(x, y);

			e.dataTransfer.setData("id", e.target.id);
			e.dataTransfer.setData("x", x);
			e.dataTransfer.setData("y", y);
		});
	}

	isDocked() {
		return this.isStatic();
	}

	undock(x, y) {
		this.setAbsolute();
		this.setLeft((x - this.width / 2) + "px");
		this.setTop(y + "px"); 
		this.setWidth(this.width);
		this.setHeight(this.height);
		if (this.nextSibling) this.nextSibling.remove();
 		else if (this.previousSibling) this.previousSibling.remove();
	}

	docked() {
		super.setWidth("100%");
		super.setHeight("100%");
		this.setStatic();
		let bb = this.getBoundingClientRect();
		this.body.setHeight(bb.height - 40 + "px");
	}

	topbar() {
		this.topbar = new UIElement();
		
		this.topbar.addClass("topBar");
		this.topbar.addClass("bg-1");
		this.topbar.setFlexBasis("20px");
		
		this.topbar.event('mousedown', e => this.setAttribute('draggable','true'));
		this.topbar.event('mouseout', e => this.removeAttribute('draggable'));

		this.appendChild(this.topbar);	
	}

	body() {
		this.body = new UIElement();
		this.body.setFlexBasis("auto");
		//this.body.setHeight(this.height - 40 + "px");
		this.appendChild(this.body);
	}

	bottombar() {
		this.bottombar = new UIElement();
		this.bottombar.setFlexBasis("20px");
		this.bottombar.dragging = false;
		this.bottombar.startPos = {x: 0, y:0};

		this.draggingNotch = new UIElement();
		this.draggingNotch.addClass("draggingNotch");
		this.bottombar.appendChild(this.draggingNotch);


		this.draggingNotch.event("mousedown", (e)=>{
			this.bottombar.dragging = true;
			this.bottombar.startPos.x = e.clientX;
			this.bottombar.startPos.y = e.clientY;
		});

		document.addEventListener("mousemove", (e)=>{

			if (this.bottombar.dragging) {
				let width = this.width + e.clientX - this.bottombar.startPos.x;
				let height = this.height + e.clientY - this.bottombar.startPos.y;

				this.bottombar.startPos.x = e.clientX;
				this.bottombar.startPos.y = e.clientY;

				this.setDimensions(width, height);
				this.body.style.height = this.height - 40 + "px";

			}
		});

		this.bottombar.event("mouseup", (e)=>{
			this.bottombar.dragging = false;
		});

		this.appendChild(this.bottombar);
	}

	setWidth(width) {
		this.width = width;
		this.setStyle("width", this.width + "px");
	}

	setHeight(height) {
		this.height = height;
		this.setStyle("height", this.height + "px");
	}

	setDimensions(width, height) {
		this.width = width;
		this.height = height;
		this.setStyle("width", this.width + "px");
		this.setStyle("height", this.height + "px");
	}

}

customElements.define('pro-widget', Widget);