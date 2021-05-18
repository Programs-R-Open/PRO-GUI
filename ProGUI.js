import RewriteableString from './Elements/RewriteableString.js';
import ScrolleablePanel from './Elements/ScrolleablePanel.js';
import UIElement from './Elements/UIElement.js';
import TreeMenu from './Elements/TreeMenu.js';
import Dropdown from './Elements/Dropdown.js';
import Button from './Elements/Button.js';
import Input from './Elements/Input.js';
import Card from './Elements/Card.js';
import List from './Elements/List.js';
import Row from './Elements/Row.js';


function createElements(items, parent) {
	items.forEach(item => {
		let element = item.element;
		let instance;
		if (element.startsWith("pro-")) {
			if (element == "pro-scrolleable-panel") instance = new ScrolleablePanel(...item.args);
		} else {
			instance = document.createElement(element);
		}

		if (item.id) instance.id = item.id;
		if (item.class) instance.classList.add(...item.class);
		if (item.style) Object.entries(item.style).forEach(([key, value])=>instance.style[key] = value);
		if (item.content) instance.innerHTML = item.content;
		if (item.value) instance.value = item.value; 
		if (item.rows) instance.rows = item.rows;
		if (item.readonly == "") instance.readonly = item.readonly;
		if (item.childs) createElements(item.childs, instance);
		if (item.events) Object.entries(item.events).forEach(([key, value])=>instance.addEventListener(key, value));


		parent.appendChild(instance);
	});
}

export {UIElement, Dropdown, RewriteableString, TreeMenu, List, ScrolleablePanel, Input, Button, Card, Row, createElements};