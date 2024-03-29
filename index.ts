#! /usr/bin/env node
import inquirer from 'inquirer';

let tasks: string[] = [];

async function addTask(): Promise<void> {
    const taskInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'task',
            message: 'What task do you want to add?',
        },
    ]);

    if (taskInput.task) {
        tasks.push(taskInput.task);
        console.log(`Task "${taskInput.task}" added to the list.`);
    }

    askToAddMore();
}
async function askToAddMore(): Promise<void> {
    const addMore = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add another task?',
            default: false,
        },
    ]);

    if (addMore.addMore) {
       addTask();
    } else {
        console.log('Your To-Do List:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        });
    }
}

// Start the process
addTask();

