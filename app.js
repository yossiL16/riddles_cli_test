import readline from "readline-sync";
import {createPlayer} from "./utils/Player.js"
import {all} from "./riddles/allRiddels.js"
import {measureSolveTime} from "./utils/Required.js"
import {addSolveTime} from "./utils/addTime.js"
import {showStats} from "./utils/printStats.js"
import {askRiddle} from "./utils/ridelAsk.js"

console.log("Welcome to the math puzzle game!!!");
console.log("- - - - - - - - - - -  - - -");
console.log("");
const name = readline.question("What is your name? ");
const player1 = createPlayer(name)
for(let r of all){
    let timeS = measureSolveTime(()=> askRiddle(r))
    addSolveTime(player1, timeS)
}
showStats(player1)
console.log("");
console.log("you were great!!");
console.log("");
console.log("bay");








