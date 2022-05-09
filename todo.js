let input = prompt("What would you like to do?");
const toDoList = [];

while (input !== "quit" && input !== "q") {
	if (input === "list") {
		console.log("**********");
		for (let i = 0; i < toDoList.length; i++) {
			console.log(`${i}: ${toDoList[i]}`);
		}
		console.log("**********");
	} else if (input === "new") {
		const newToDo = prompt("Ok, what is the new ToDo?");
		toDoList.push(newToDo);
		console.log(`${newToDo} added to the list`);
	} else if (input === "delete") {
		const index = parseInt(prompt("Ok, enter an index to delete:"));
		if (!Number.isNaN(index)) {
			const deleted = toDoList.splice(index, 1);
			console.log(`Ok, deleted ${deleted[0]}`);
		} else {
			console.log("Unknown index");
		}
	}
	input = prompt("What would you like to do?");
}
console.log("You quit!");
