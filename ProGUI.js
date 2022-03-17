import NativeElement from './Elements/Native/NativeElement.js';
import UIElement from './Elements/Native/UIElement.js';
import Textarea from './Elements/Native/Textarea.js';
import Button from './Elements/Native/Button.js';
import Canvas from './Elements/Native/Canvas.js';
import Input from './Elements/Native/Input.js';
import SVG from './Elements/Native/SVG.js';

/*
import TreeMenu from './Elements/Derived/TreeMenu.js';
import Card from './Elements/Derived/Card.js';
import ReturnCallbacks from './Tools/ReturnCallbacks.js';
*/
import RewriteableString from './Elements/Derived/RewriteableString.js';
import ScrolleablePanel from './Elements/Derived/ScrolleablePanel.js';
import ColumnConstraint from './Elements/Derived/ColumnConstraint.js';
import SearchList from './Elements/Derived/SearchList.js';
import Pagination from './Elements/Derived/Pagination.js';
import Accordion from './Elements/Derived/Accordion.js';
import PopupMenu from './Elements/Derived/PopupMenu.js';
import Dropdown from './Elements/Derived/Dropdown.js';
import List from './Elements/Derived/List.js';
import Icon from './Elements/Derived/Icon.js';
import Col from './Elements/Derived/Col.js';
import Row from './Elements/Derived/Row.js';



function createElements(items, parent) {
	let elements = {};
	
	items.forEach(item => {
		let element = item.element;
		let instance;
		if (element.startsWith("pro-")) {
			if (!item.args) item.args = [];
			let type = getTypeFromString(element);
			instance = new type(parent, ...item.args);

		} else {
			instance = document.createElement(element);
			parent.appendChild(instance);
		}

		if (item.id) {instance.id = item.id; elements[item.id] = instance;};
		if (item.class) instance.classList.add(...item.class);
		if (item.style) Object.entries(item.style).forEach(([key, value])=>instance.style[key] = value);
		if (item.content) instance.innerHTML = item.content;
		if (item.value) instance.value = item.value; 
		if (item.rows) instance.rows = item.rows;
		if (item.readonly == "") instance.readonly = item.readonly;
		if (item.childs) elements = Object.assign(elements, createElements(item.childs, instance));
		if (item.events) Object.entries(item.events).forEach(([key, value])=>instance.addEventListener(key, value));
		if (item.type) instance.type = item.type;

	});

	return elements;
}


function getTypeFromString(text) {
	let type;
	
	if (text == "pro-rewriteable-string")	type = RewriteableString;
	if (text == "pro-scrolleable-panel")	type = ScrolleablePanel;
	if (text == "pro-search-list") 			type = SearchList;
	if (text == "pro-accordion") 			type = Accordion;
	if (text == "pro-button") 				type = Button;
	if (text == "pro-list") 				type = List;
	if (text == "pro-row") 					type = Row;
	if (text == "pro-col") 					type = Col;

	return type;

}

function instantiate(text, ...args) {
	let type = getTypeFromString(text);
	return new type(...args);
}

export {
	getTypeFromString,
	createElements,
	instantiate,


	//Tools
	//ReturnCallbacks,

	//Native Elements
	NativeElement,
	UIElement,
	Textarea,
	Canvas,
	Button,
	Input,
	SVG,

	//Derived Elements
	/*
	TreeMenu,
	Card,
	*/
	RewriteableString,
	ColumnConstraint,
	ScrolleablePanel,
	SearchList,
	Pagination,
	Accordion,
	PopupMenu,
	Dropdown,
	Icon,
	List,
	Row,
	Col
};