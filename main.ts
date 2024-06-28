import inquirer from "inquirer"
import chalk from "chalk"

let todoList : string [] = [] ;

let conditions = true;

console.log(chalk.bold.rgb(284,284,284)("~".repeat(60)));
console.log(chalk.bold.rgb(284,284,284)("\n \tWelcome To Your ToDoList :)\n"));
console.log(chalk.bold.rgb(284,284,284)("~".repeat(60)));

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option which you want to do",
                choices: ["Add Task" , "Delete Task" , "Update Task" , "View Todolist" , "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask();
        }
        else if(option.choices === "Delete Task"){
            await deleteTask();
        } 
        else if(option.choices === "Update Task"){
            await updateTask();
        }
        else if(option.choices === "View Todolist"){
            await viewTask();
        }
        else if(option.choices === "Exit"){
            conditions = false;
            console.log("~".repeat(60));
            console.log("\n \tThanks For Using Our ToDoList :)");
            console.log("~".repeat(60));
        }
    }
}

// function to add new task in todoList
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :",
        }
    ]);
     todoList.push(newTask.task);
     console.log(`\n ${newTask.task} Task added succesfully in To Do List`) 
}

// Function to view task in todoList
let viewTask = async () => {
    console.log("\nYour To Do List:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
}

// function to delete a task from todoList

let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index number' of your task which you want to delete :",
        },
    ]);
    let deletedTask = todoList.splice(taskIndex.index, - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted succesfully from your todoList`)
}

// function to update a task in your todoList

let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task which you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task :"
        }
    ]);
    todoList[update_task_index.index -1 ] = update_task_index.new_task
    console.log(`\n Task at index number ${update_task_index.index -1 } updated succesfully [For updeted list check 'view tododList]'`)
}

 main();