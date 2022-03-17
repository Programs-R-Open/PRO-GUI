/*

	usage:

		let a  = new ReturnCallbacks(["Evento1", "Evento2"]);

		a.onEvento1(()=>console.log("Evento1\n"));
		a.onEvento2(()=>console.log("Evento2\n"));

		a.call["Evento1"]();

		a.call["Evento2"]();

		a.callEvento1();


	Result:
	
		Evento1
		Evento2
		Evento2

*/


export default class ReturnCallbacks {

	//Expected: array: ["name1", "name2", ...]
	constructor(array) {

		this.call = {};
		this.on = {};

		array.forEach(name=>{

			this["on" + name] = func=>{
				this.call[name] = func;
				this["call" + name] = this.call[name];
			};
		});
	}

}