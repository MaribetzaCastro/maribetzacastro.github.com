//console.log("Hola Mundo Cruel");
//let container = document.querySelector(".container");
//console.log(container);
/*let link=document.querySelectorAll("a");
console.log(link);*/

/*let links=document.querySelectorAll("a");
links.forEach(function(link){
	console.log(link);
}

)*/
/*
let celdas=document.querySelectorAll("td");
celdas.forEach(function(td){
 td.addEventListener('click',function(){
	// console.log("click");
console.log(this);
	});	
});*/
/*
//obtener los elementos de la clase .clase
let links=document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
//agregar un evento
link.addEventListener('click',function(){
	console.log(this);
});
	
});


*/
/*
let links=document.querySelectorAll(".close");

links.forEach(function(link){
	link.addEventListener("click",function(ev){
		ev.preventDefault();
		return false;
	});
});

*/

/*
let iconos=document.querySelectorAll("i");
iconos.forEach(function(icono){
	icono.classList.remove("fa-star-o");
	icono.classList.add("fa-star");
});*/


let links=document.querySelectorAll(".close");
links.forEach(function(link){
	link.addEventListener("click",function(ev){
		ev.preventDefault();
		
		let content=document.querySelector('.content');
		
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");
		
		content.classList.add("fadeOutUp");
		content.classList.add("animated");
		
		setTimeout(function(){
			location.href="/";
		},1000);

		return false;
	});
	
});
