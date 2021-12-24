import RewriteableString from './Elements/RewriteableString.js';
import ScrolleablePanel from './Elements/ScrolleablePanel.js';
import ColumnConstraint from './Elements/ColumnConstraint.js';
import SearchList from './Elements/SearchList.js';
import UIElement from './Elements/UIElement.js';
import Accordion from './Elements/Accordion.js';
import TreeMenu from './Elements/TreeMenu.js';
import Dropdown from './Elements/Dropdown.js';
import Textarea from './Elements/Textarea.js';
import Button from './Elements/Button.js';
import Canvas from './Elements/Canvas.js';
import Input from './Elements/Input.js';
import Card from './Elements/Card.js';
import List from './Elements/List.js';
import Row from './Elements/Row.js';
import Col from './Elements/Col.js';


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

	RewriteableString,
	ScrolleablePanel,
	ColumnConstraint,
	SearchList,
	UIElement,
	Accordion,
	TreeMenu,
	Dropdown,
	Textarea,
	Button,
	Canvas,
	Input,
	List,
	Card,
	Row,
	Col,
};