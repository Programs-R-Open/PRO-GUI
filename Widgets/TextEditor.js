import { Widget } from './Widget.js';
import { TextField } from '../Elements/TextField.js';


export class TextEditor extends Widget {
	constructor(id) {
		super(id);

		this.textArea = new TextField();
		this.textArea.style.width = "100%";
		this.textArea.style.height = "100%";
		this.body.appendChild(this.textArea);

	}

	setFile(file) {
		this.file = file;
		this.textArea.value = this.file.data;
	}

}

customElements.define('pro-text-editor', TextEditor);
