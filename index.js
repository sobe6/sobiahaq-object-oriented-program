#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// object oriented programming
// make class for student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
// make class for person
class person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
// make arrow function
const startProgram = async (persons) => {
    // add do while loop 
    do {
        console.log(chalk.bold.magenta("\n>>>>>>>>>>------------'WELCOME TO OBJECT ORIENTED PROGRAMMING PROJECT'---------------<<<<<<<<<<<<\n"));
        const answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.green("\t \nWho do you want to interact with?"),
                choices: [chalk.bold.yellow("Student"), chalk.bold.green("Staff"), chalk.bold.red("Exit")],
            },
        ]);
        //  add if else condition 
        if (answer.select == chalk.bold.green("Staff")) {
            console.log(chalk.bold.cyan("\nFeel free to ask any questions as you head to the staff room.\n"));
        }
        else if (answer.select == chalk.bold.yellow("Student")) {
            const answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bold.magenta("\nPlease enter the student's name you'd like to connect with."),
            });
            const student = persons.students.find((val) => val.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addstudent(name);
                console.log(chalk.bold.cyan(`\nHello I am ${chalk.bold.yellow(name.name)}. Nice to meet you!\n`));
                console.log(chalk.bold.yellow("\n>>>>>>-------New student added-------<<<<<<"));
                console.log(chalk.bold.green("\n>>>>>>>-------Current Student List:--------<<<<<<<\n"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.green(`\nHello I am ${chalk.bold.magenta(student.name)}. Nice to see you again!\n`));
                console.log(chalk.bold.cyan("\n>>>>>>>>-------Existing Student List-------<<<<<<<\n"));
                console.log(persons.students);
            }
        }
        else if (answer.select == chalk.bold.red("Exit")) {
            console.log(chalk.bold.red("\n>>>>>>-----Exiting The Program---------<<<<<<<\n"));
            process.exit();
        }
    } while (true);
};
// function call 
startProgram(persons);
