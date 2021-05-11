import { Widget } from './Widget.js';
import { TextField } from '../Elements/TextField.js';

export class Console extends Widget {
	constructor(id) {
		super(id);

		this.cmds = {
			"version":()=>{this.textField.insert("1.0\\n");}
		}

		this.lastCmds = [];
		this.lastCmdsIndex = 0;

		this.textField = new TextField();
		this.body.appendChild(this.textField);
		this.textField.setHeight("100%");
		this.textField.insert("> ");
		this.textField.onNewLine = this.newLine.bind(this);
		this.textField.onArrowUp = this.arrowUp.bind(this);
		this.textField.onBackspace = (text) => {
			if (text.data.endsWith("> ")) return;
			text.backspace();
		};
	}

	arrowUp(text) {
		text.data = text.data.substring(0, text.data.lastIndexOf('>') + 2);
		text.insert(this.lastCmds[this.lastCmdsIndex]);
		//if (this.lastCmdsIndex ) 
			this.lastCmdsIndex++;
	}

	newLine() {
		this.lastCmdsIndex = 0;
		let lines = this.textField.data.split("\\n");
		lines = lines[lines.length - 2].slice(2);
		this.lastCmds.unshift(lines);
		let args = lines.split(" ");
		let cmds = this.cmds;
		args.forEach(arg=>{
			if(!cmds[arg]) return;
			cmds = cmds[arg];
		});

		cmds(this);

		this.textField.insert("> ");
	}

	appendCmds(cmd) {
		this.cmds = this.merge(this.cmds, cmd);
	}

	merge(...arg) {

		let target = {};

		const merger = (obj) => {
			for (let prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						target[prop] = this.merge(target[prop], obj[prop]);
					} else {
						target[prop] = obj[prop];
					}
				}
			}
		};

		for (let i = 0; i < arg.length; i++) {
			merger(arg[i]);
		}

		return target;
	};
}


customElements.define('pro-console', Console);
