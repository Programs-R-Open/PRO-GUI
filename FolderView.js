export class FolderView {

	constructor( file) {
		this.file = file;


		this.style.color = "white";
		this.classList.add("m-15");

		this.img = this.document.createElement("img");
		this.img.src = "../../SVG/folder.svg";
		this.img.classList.add("menuItem");
		
		this.name = this.document.createElement("div");
		this.name.innerHTML = file.name;
		this.name.classList.add("menuItem");


		this.appendChild(img);
		this.appendChild(name);
	}
}