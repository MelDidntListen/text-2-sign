// Text 2 Sign
// Created by Gianna Powers and Zionna Brown
// For JS class at CSUMB
// For live version, see meldidntlisten.com


// global variables ======================================================== ||
let textInput = document.querySelector("#textInput");
//let currentName = InputEvent.data; // doesnt work as needed
let currentName = textInput.value;
let nameLetters; 
let nameArray = [];

// main func ================================================================ ||
function typeName(){
    // clearName() //Clear all letters in finger spelling images
    currentName = textInput.value;
    updateNameLetters(); //Split current input into array of letters
    // getTranslate() // get translation finger spelling image to match
    // drawFSimages(); // draw images
    

    //tester of current values
    console.log(currentName); // Output: ["H", "e", "l", "l", "o"]
};
//function is called by window.onkeyup down below

// below listener only calls TypeName() when enter is pressed to submit the current input.
//   this won't work as we need to call this function as soon as any key is pressed
//      vvvv
// textInput.addEventListener("change", typeName);




// functions called in typeName() ============================================||

// Makes the string into an array of letters


function updateNameLetters(){
    nameLetters = currentName.split(""); 
};

// let nameLetterPS = [""];

// function getTranslate(){

//     nameLetterPS = [""];
// };

// function drawFSimages(){
//     return;
// };


// functions called in saveEnter() ============================================||
let submitButton = document.querySelector(".submit");

const isAlphabet = (input) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(input);
}

function saveEnter(){
    console.log(currentName);
    if (isAlphabet(input.value)){
        //Current input text
        //Current fingerspelling images
        //Add current to array
        //Display saved word below
        return     
    }
    else {
        console.log("Current name needs to be text, cannot be saved")
        //(display message saying to type first?) modal. Display block, pass time then display none
        return
    }
}

submitButton.addEventListener("click", saveEnter);



// functions called in clearName() ============================================||

let clearButton = document.querySelector(".clear");

function clearName(){
    nameArray = [];
	//Clear current fingerspelling images   foreach !!!
}

clearButton.addEventListener("click", clearName);



// Switch left and right () ============================================||
let isRight = true;
let buttonR = document.querySelector(".buttonR");
let buttonL = document.querySelector(".buttonL");

function switchToRIGHTHand(){
    if (isRight){
        isRight = false; //Switches state
        buttonR.style.backgroundColor ='#85d067'; //Left button gets darker (css)
        buttonR.style.filter ='drop-shadow(0px 0px 0px #075313)';
        buttonR.style.marginLeft = '10px, 11px, 0px, 9px';
        
        //Switch to left button array 
        //Switch current displayed fingerspelling images to left
    }
    else {
        console.log("Already set to right hand")
    }
}

function switchToLEFTHand(){
    if (!isRight){
        isRight = false; //Switches state
        buttonL.style.backgroundColor ='#85d067'; //Left button gets darker (css)
        buttonL.style.filter ='drop-shadow(0px 0px 0px #075313)';
        buttonL.style.marginLeft = '10px, 11px, 0px, 9px';
        
        //Switch to left button array 
        //Switch current displayed fingerspelling images to left
    }
    else {
        console.log("Already set to left hand")
    }
}

buttonR.addEventListener("click", switchToRIGHTHand);
buttonL.addEventListener("click", switchToLEFTHand);




// Key tracker event handlers ================================================ ||
// Tracks which keys are pressed. Only 26 English letter keys are listened to, + delete
// adds toUpperCase as we only need one case for this to work, and we will be displaying all letters as uppercase
// push will add key pressed to stored nameArray
// pop will delete the lastest letter added to array
window.onkeyup = function(event) {
    let key = event.key.toUpperCase();
    if ( key == 'A' ) {
        console.log("'A' key is pressed");
        nameArray.push('A');
    } else if ( key == 'B' ) {
        console.log("'B' key is pressed");
        nameArray.push('B');
    } else if ( key == 'C' ) {
        console.log("'C' key is pressed");
        nameArray.push('C');
    } else if ( key == 'D' ) {
        console.log("'D' key is pressed");
        nameArray.push('D');
    } else if ( key == 'E' ) {
        console.log("'E' key is pressed");
        nameArray.push('E');
    } else if ( key == 'F' ) {
        console.log("'F' key is pressed");
        nameArray.push('F');
    } else if ( key == 'G' ) {
        console.log("'G' key is pressed");
        nameArray.push('G');
    } else if ( key == 'H' ) {
        console.log("'H' key is pressed");
        nameArray.push('H');
    } else if ( key == 'I' ) {
        console.log("'I' key is pressed");
        nameArray.push('I');
    } else if ( key == 'J' ) {
        console.log("'J' key is pressed");
        nameArray.push('J');
    } else if ( key == 'K' ) {
        console.log("'K' key is pressed");
        nameArray.push('K');
    } else if ( key == 'L' ) {
        console.log("'L' key is pressed");
        nameArray.push('L');
    } else if ( key == 'M' ) {
        console.log("'M' key is pressed");
        nameArray.push('M');
    } else if ( key == 'N' ) {
        console.log("'N' key is pressed");
        nameArray.push('N');
    } else if ( key == 'O' ) {
        console.log("'O' key is pressed");
        nameArray.push('O');
    } else if ( key == 'P' ) {
        console.log("'P' key is pressed");
        nameArray.push('P');
    } else if ( key == 'Q' ) {
        console.log("'Q' key is pressed");
        nameArray.push('Q');
    } else if ( key == 'R' ) {
        console.log("'R' key is pressed");
        nameArray.push('R');
    } else if ( key == 'S' ) {
        console.log("'S' key is pressed");
        nameArray.push('S');
    } else if ( key == 'T' ) {
        console.log("'T' key is pressed");
        nameArray.push('T');
    } else if ( key == 'U' ) {
        console.log("'U' key is pressed");
        nameArray.push('U');
    } else if ( key == 'V' ) {
        console.log("'V' key is pressed");
        nameArray.push('V');
    } else if ( key == 'W' ) {
        console.log("'W' key is pressed");
        nameArray.push('W');
    } else if ( key == 'X' ) {
        console.log("'X' key is pressed");
        nameArray.push('X');
    } else if ( key == 'Y' ) {
        console.log("'Y' key is pressed");
        nameArray.push('Y');
    } else if ( key == 'Z' ) {
        console.log("'Z' key is pressed");
        nameArray.push('Z');
    } else if ( event.key === 'Delete' || event.inputType === "deleteContentBackward" || event.key === 'Backspace') {
        console.log("'Delete' key is pressed");
        nameArray.pop();
    } else if ( event.key === 'Enter' ) {
        console.log("'Enter' key is pressed");
        console.log(nameArray);
    } 
}

// Storing correct translate files () ============================================||

let rightHandLetters = {
    "a" : "images/right_a.jpg",
    "b" : "images/right_b.jpg",
    "c" : "images/right_c.jpg",
    "d" : "images/right_d.jpg",
    "e" : "images/right_e.jpg",
    "f" : "images/right_f.jpg",
    "g" : "images/right_g.jpg",
    "h" : "images/right_h.jpg",
    "i" : "images/right_i.jpg",
    "j" : "images/right_j.jpg",
    "k" : "images/right_k.jpg",
    "l" : "images/right_l.jpg",
    "m" : "images/right_m.jpg",
    "n" : "images/right_n.jpg",
    "o" : "images/right_o.jpg",
    "p" : "images/right_p.jpg",
    "q" : "images/right_q.jpg",
    "r" : "images/right_r.jpg",
    "s" : "images/right_s.jpg",
    "t" : "images/right_t.jpg",
    "u" : "images/right_u.jpg",
    "v" : "images/right_v.jpg",
    "w" : "images/right_w.jpg",
    "x" : "images/right_x.jpg",
    "y" : "images/right_y.jpg",
    "z" : "images/right_z.jpg",
}

let leftHandLetters = {
    "a" : "images/left_a.jpg",
    "b" : "images/left_b.jpg",
    "c" : "images/left_c.jpg",
    "d" : "images/left_d.jpg",
    "e" : "images/left_e.jpg",
    "f" : "images/left_f.jpg",
    "g" : "images/left_g.jpg",
    "h" : "images/left_h.jpg",
    "i" : "images/left_i.jpg",
    "j" : "images/left_j.jpg",
    "k" : "images/left_k.jpg",
    "l" : "images/left_l.jpg",
    "m" : "images/left_m.jpg",
    "n" : "images/left_n.jpg",
    "o" : "images/left_o.jpg",
    "p" : "images/left_p.jpg",
    "q" : "images/left_q.jpg",
    "r" : "images/left_r.jpg",
    "s" : "images/left_s.jpg",
    "t" : "images/left_t.jpg",
    "u" : "images/left_u.jpg",
    "v" : "images/left_v.jpg",
    "w" : "images/left_w.jpg",
    "x" : "images/left_x.jpg",
    "y" : "images/left_y.jpg",
    "z" : "images/left_z.jpg",
}