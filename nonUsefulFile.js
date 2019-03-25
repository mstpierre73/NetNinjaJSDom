
/*These are exercices to see differents ways to acheive the same result*/

/*var titles = document.getElementsByClassName("title");

//change HTML collection into array
var titles = Array.from(titles);

titles.forEach(function(item){
	console.log(item)
})*/

/*const books = document.querySelectorAll("#book-list li .name");

//return a node list, who is already an array
books.forEach(function(book){
	book.textContent += "(book title)";
})


const booklist = document.querySelector("#book-list");
console.log(booklist.innerHTML);
console.log("My next sibling is ", booklist.nextSibling);
console.log("My next Element sibling is ", booklist.nextElementSibling);
console.log("My previous sibling is ", booklist.previousSibling);
console.log("My previous Element sibling is ", booklist.previousElementSibling);

booklist.previousElementSibling.querySelector("p").innerHTML += "<br/>Too Cool for everyone else!";


const banner = document.querySelector("#page-banner");
console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);
console.log(banner.parentNode);
console.log(banner.childNodes);
console.log(banner.children);

/*Events Exercices*/

/*var h2 = document.querySelector("#book-list");
console.log(h2);
h2.addEventListener("click", function(e){
	console.log(e.target);
	console.log(e);
});*/

/*var btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach(function(btn){
	btn.addEventListener("click", function(e){
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	});
});

const link = document.querySelector("#page-banner a");
	console.log(link);

	link.addEventListener("click", function(e){
	e.preventDefault();
	console.log("navigation to ", e.target.textContent, " was prevented.");
});
*/