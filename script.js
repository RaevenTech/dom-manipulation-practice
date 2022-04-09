/*----------------------------------------------------------- age calculator -----------------------------------------------------------*/

let myAge = 38;

if (myAge > 40) {
    document.write("You are young");
} else if (myAge > 30) {
    document.write("You very are young");
} else if (myAge > 20) {
    document.write("You way too young");
} else {
    document.write("I am old");
}

/*----------------------------------------------------------------- magic 8 ball --------------------------------------------------------------*/

var userName = "Raeven";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Would you share me your secrets?";

console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "My sources say no";
        break;
    case 6:
        eightBall = "Outlook not so good";
        break;
    case 7:
        eightBall = "Signs point to yes";
        break;
}
//console.log(eightBall);

/*------------------------------------------------------------------------ race day number allocator------------------------------------------------------------------------*/

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if (early && age > 18) {
    raceNumber += 1000;
}
if (early && age > 18) {
    console.log(`Race will begin at 9:30, your race number is ${raceNumber}`);
} else if (!early && age > 18) {
    console.log(
        `Race will begin at 11:00, your race number is: ${raceNumber}.`
    );
} else if (age < 18) {
    console.log(
        `Race will begin at 12:30, your race number is: ${raceNumber}.`
    );
} else {
    console.log("Please approach the registration desk, thanks!");
}

/* ---------------------------------------------------------------rock paper scissors------------------------------------------------------------------------------------ */

// this is players choices rock, paper or sissors
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
    ) {
        return userInput;
    } else {
        console.log("Error!");
    }
};
// assign a random number to a user choice rock, paper or sissors
const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "sissors";
    }
};
//console.log(getComputerChoice("paper"));

// comparing the player choice vs computer choice
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Game Tied";
    }
    if (userChoice === "rock" && computerChoice === "paper") {
        return "you lose";
    } else if (userChoice === "paper" && computerChoice === "sissors") {
        return "you lose";
    } else if (userChoice === "sissors" && computerChoice === "rock") {
        return "you lose";
    } else {
        return "WINNER!";
    }
};
//console.log(determineWinner("sissors", "rock"));

// playing the game

const playGame = () => {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log("you threw: " + userChoice);
    console.log("computer played: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
//playGame();

/*------------------------------------------------------------------------  sleep debt calculator -------------------------------------------------------------------------*/

const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 6;
            break;
        case "tuesday":
            return 9;
            break;
        case "wednesday":
            return 6;
            break;
        case "thursday":
            return 9;
            break;
        case "friday":
            return 6;
            break;
        case "saturday":
            return 9;
            break;
        case "sunday":
            return 9;
            break;
        default:
            return "Error!";
    }
};
//console.log(getSleepHours("tuesday"));
const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("User got the perfect amount of sleep." + idealSleepHours);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            "User got " +
                (idealSleepHours - actualSleepHours) +
                " hours sleep." +
                "More sleep than needed."
        );
    } else if (actualSleepHours < idealSleepHours) {
        console.log(
            "User got " +
                (idealSleepHours - actualSleepHours) +
                " hours less sleep than needed." +
                "Needs more rest."
        );
    }
};
console.log(calculateSleepDebt());

/*------------------------------------------------------------------------  Whale speech converter -------------------------------------------------------------------------*/

let input = "Winner winner chicken dinner!";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}
let resultString = resultArray.join("").toUpperCase();

//console.log(input[i]);
//console.log(i);
console.log(resultString);
