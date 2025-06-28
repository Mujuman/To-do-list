let toDoList = []

// Load saved list from localStorage on page load
if (localStorage.getItem("toDoList")) {
	toDoList = JSON.parse(localStorage.getItem("toDoList"))
}

renderToDoList()

function renderToDoList() {
	let toDoListHtml = ''
	for (let i = 0; i < toDoList.length; i++) {
		let toDo = toDoList[i]
		let html = `
		<p>${toDo} 
		<button onclick="Delete(${i})" id='delete-btn'>X</button></p>
		`
		toDoListHtml += html
	}
	document.querySelector('.toDoContainer').innerHTML = toDoListHtml
	
	// Save updated list to localStorage
	localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

function Delete(i) {
	toDoList.splice(i, 1)
	renderToDoList()
}

function add() {
	let inputElement1 = document.querySelector('#inputElement')
	let name = inputElement1.value.trim()
	if (name === '') {
		alert('Please enter your to-do item')
	} else {
		toDoList.push(name)
		inputElement1.value = ''
		renderToDoList()
	}
}