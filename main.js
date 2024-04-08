#! /usr/bin/env node
import inquirer from "inquirer";
// Initialize a list and condition for loop
let todoList = [];
while (true) {
    // Provide options to user
    let todoOptions = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "What do you want to do?",
            choices: ["Add", "Add at a Place", "Swipe", "Delete", "Edit", "View", "Exit"]
        }
    ]);
    // For add some task
    if (todoOptions.options == "Add") {
        let todoAddQuestion = await inquirer.prompt([
            {
                name: "todoAdd",
                type: "input",
                message: "What do you want to add in list?"
            }
        ]);
        if (todoAddQuestion.todoAdd.length <= 0) {
            console.log("Please add something.");
        }
        else {
            todoList.push(todoAddQuestion.todoAdd);
            for (let j in todoList) {
                console.log(todoList[j]);
            }
        }
    }
    // Add at specific place
    else if (todoOptions.options == "Add at a Place") {
        if (todoList.length == 0) {
            console.log("\n\tList is Empty!!");
        }
        else {
            let indexPlace = [];
            let a = 0;
            for (let i in todoList) {
                a += 1;
                indexPlace.push(a);
            }
            let placeQuestion = await inquirer.prompt([
                {
                    name: "question",
                    message: "Where do you want to add?",
                    type: "list",
                    choices: (indexPlace)
                },
                {
                    name: "answer",
                    message: "What do you want to add? ",
                    type: "input"
                }
            ]);
            let placeOfIndex = placeQuestion.question - 1;
            todoList.splice(placeOfIndex, 0, placeQuestion.answer);
            for (let n in todoList) {
                console.log(todoList[n]);
            }
        }
    }
    // For Swiping
    else if (todoOptions.options == "Swipe") {
        if (todoList.length == 0) {
            console.log("\n\tList is Empty!!");
        }
        else {
            let swipeQuestion = await inquirer.prompt([
                {
                    name: "swipe1",
                    message: "Select 1st Task: ",
                    type: "list",
                    choices: todoList
                },
                {
                    name: "swipe2",
                    message: "Select 2nd Task: ",
                    type: "list",
                    choices: todoList
                }
            ]);
            let swipe1Index = todoList.indexOf(swipeQuestion.swipe1);
            let swipe2Index = todoList.indexOf(swipeQuestion.swipe2);
            todoList[swipe1Index] = swipeQuestion.swipe2;
            todoList[swipe2Index] = swipeQuestion.swipe1;
            for (let o in todoList) {
                console.log(todoList[o]);
            }
        }
    }
    // For delete task
    else if (todoOptions.options == "Delete") {
        if (todoList.length == 0) {
            console.log("\n\tList is Empty!!");
        }
        else {
            let todoDeleteQuestion = await inquirer.prompt([
                {
                    name: "delete",
                    type: "list",
                    message: "which do you want to delete?",
                    choices: todoList
                }
            ]);
            let a = todoList.indexOf(todoDeleteQuestion.delete);
            todoList.splice(a, 1);
            for (let k in todoList) {
                console.log(todoList[k]);
            }
        }
    }
    // For Edit a task
    else if (todoOptions.options == "Edit") {
        if (todoList.length == 0) {
            console.log("\n\tList is Empty!!");
        }
        else {
            let todoEditingQuestion = await inquirer.prompt([
                {
                    name: "editingAnswer",
                    type: "list",
                    message: "which do you want to edit?",
                    choices: todoList
                }
            ]);
            let editedQuestion = await inquirer.prompt([
                {
                    name: "editedAnswer",
                    message: "What do you want to enter there?",
                    type: "input"
                }
            ]);
            let editingIndex = todoList.indexOf(todoEditingQuestion.editingAnswer);
            todoList[editingIndex] = editedQuestion.editedAnswer;
            for (let i in todoList) {
                console.log(todoList[i]);
            }
        }
    }
    //for display list
    else if (todoOptions.options == "View") {
        if (todoList.length == 0) {
            console.log("\n\tList is Empty!!");
        }
        else {
            console.log('\n\t"Here is your Todo List:"\n');
            let iIndex = 0;
            for (let i in todoList) {
                iIndex += 1;
                console.log(`\t${iIndex}\) ${todoList[i]}`);
            }
            console.log("");
        }
    }
    // For Exit from loop
    else if (todoOptions.options == "Exit") {
        break;
    }
}
