import readline from "readline-sync";

export const askRiddle = (riddleObj) => {

    while(true){
        console.log("- - - - - - - -");
        console.log(riddleObj.name);
        console.log("- - - - - - - -");
        console.log("");
        console.log(riddleObj.taskDescription);
        console.log("");
        const answer = readline.question("What is your answer? ");
        if(answer === riddleObj.correctAnswer){
            console.log("Very good!");
            break
        }
            console.log("try agane"); 
            console.log("");
            console.log("");
            console.log("");                 
    }
}