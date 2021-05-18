
export default class UIElement extends HTMLElement {

	constructor() {
		super();
		this.event = this.addEventListener;
		this.style.display = "block";
		
		this.onResized = () => {};
		this.onChildRemoved = () => {};
		this.onChildAppended = () => {};
		this.event = this.addEventListener;
	}

	rmClass(className) {
		this.classList.remove(className);
	}

	addClass(className) {
		this.classList.add(...className);
	}

	hide() {
		this.style.display = "none";
	}

	show() {
		this.style.display = "";
	}

	setFlex() {
		this.setStyle("display", "flex");
	}

	setRow() {
		this.setStyle("display", "flex");
		this.setStyle("flexDirection", "row");
	}

	setCol() {
		this.setStyle("display", "flex");
		this.setStyle("flexDirection", "column");
	}

	setFlexBasis(value) {
		this.setStyle("flexBasis", value);
		this.onResized(this);
	}

	setAbsolute() {
		this.setStyle("position", "absolute");
	}

	setStatic() {
		this.setStyle("position", "static");
	}

	isStatic() {
		return this.isStyle("position", "static");
	}

	setWidth(value) {
		this.setStyle("width", value);
		this.onResized(this);
	}

	setHeight(value) {
		this.setStyle("height", value);
		this.onResized(this);
	}

	setDimensions(dim) {
		this.setHeight(dim.height);
		this.setWidth(dim.width);
	}

	setTop(value) {
		this.setStyle("top", value);
	}

	setLeft(value) {
		this.setStyle("left", value);
	}

	setStyle(style, value) {
		this.style[style] = value;
	}

	getStyle(style) {
		return this.style[style];
	}

	isStyle(style, value) {
		return this.style[style] == value;
	}

	isVisible() {
		return !this.classList.contains("hidden"); 
	}

	clear() {
		this.innerHTML = "";
	}

	drop = ({dropCb = () => {}, dragOverCb = ()=>{}}) => {
		if (window.File && window.FileReader && window.FileList && window.Blob) {

			this.event("dragenter", (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.addClass('highlight');
			});

			this.event("dragleave", (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.rmClass('highlight');
			});

			this.event("dragover", (e) => {
				e.preventDefault();
				e.stopPropagation();
				dragOverCb();
			});

			this.event("drop", (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.rmClass('highlight');
				dropCb(e);
			});

		} 
	}

	drag(cb) {
		this.addEventListener("dragstart", (e) => {
			e.stopPropagation();
			cb(e);
		});
	}

	contextMenuInit() {

		this.event("contextmenu", (e)=>{
			e.preventDefault();
			this.onContextMenuShow(e)
		});

		document.addEventListener( "click", (e) => {
			let button = e.which || e.button;
			if ( button === 1 ) {
				this.onContextMenuHide();
			}
		});
	}

	removeChild(element) {
		super.removeChild(element);
		this.onChildRemoved(element);
	}

	appendChild(element) {
		super.appendChild(element)
		this.onChildAppended(element);
	}

}

console.trace()
customElements.define('pro-ui-element', UIElement);