/*Project inspired by The Net Ninja-->

/*Delete books*/
const list = document.querySelector("#book-list ul");
list.addEventListener("click", function(e){
	if(e.target.className === "delete"){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

/*Adding books*/
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
	e.preventDefault();
	const value = addForm.querySelector("input[type='text']").value;
	
	/*create elements*/
	const newli = document.createElement("li");
	const bookName = document.createElement("span");
	const deletebtn = document.createElement("span");

	/*add content */
	deletebtn.textContent = "delete";
	bookName.textContent = value;

	/*append to the DOM*/
	newli.appendChild(bookName);
	newli.appendChild(deletebtn);
	list.appendChild(newli);

	
	/*Style the new element*/
	const lastLi = document.querySelector("li:last-child");
	bookName.classList.add("name");
	deletebtn.classList.add("delete");
});




