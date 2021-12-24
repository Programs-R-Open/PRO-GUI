import Row from './Row.js';
import UIElement from "../Native/UIElement.js";
import Button from "../Native/Button.js";

export default class Pagination extends Row{
    constructor(parent = null){
        super(parent);

        this.setCols(6);

        this.buttonStart = new Button(this, "«");
        this.buttonPrevious = new Button(this, "‹");
        this.currentPage = new UIElement(this, "0");
        this.totalPages = new UIElement(this, "/10");
        this.buttonNext = new Button(this, "›");
        this.buttonEnd = new Button(this, "»");
    }
}

customElements.define("pro-pagination", Pagination);