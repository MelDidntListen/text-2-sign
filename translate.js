// Text 2 Sign
// Created by Gianna Powers and Zionna Brown
// For JS class at CSUMB
// For live version, see meldidntlisten.com


// global variables ======================================================== ||
let textInput = document.querySelector(".typingArea");
//let currentName = InputEvent.data; // doesnt work as needed
//let currentName = textInput.value; // no longer needed with new event system
let nameArray = [];
let imageArray = [];

// main func ================================================================ ||
function typeName(){
    let joinedName = nameArray.join("");
    textInput.innerText = joinedName;
    //getTranslate() // get translation finger spelling image to match //TODO
    //drawFSimages(); // draw images //TODO
    
    //tester of current values
    console.log(nameArray); // Output: ["H", "e", "l", "l", "o"]
};
//function is called by window.onkeyup down below

// below listener only calls TypeName() when enter is pressed to submit the current input.
//   this won't work as we need to call this function as soon as any key is pressed
//      vvvv
// textInput.addEventListener("change", typeName);


// functions called in typeName() ============================================||
let imagez = document.querySelector(".imagez");

function getTranslate(){  
    console.log("getTranslate called");
    imagez.innerHTML = ""; //empty out all images in section
    nameArray.forEach(matchLetter) // make image tag with url // loop through name letters array, for each index, 
    // imageArray = [];
};

function matchLetter(Letter){
    if(isRight){ //if if left or right check
        console.log(rightHandLetters[Letter]);
        let imageURL = rightHandLetters[Letter];
        var img = document.createElement('img');
        img.src = imageURL;
        document.querySelector('.imagez').appendChild(img);
    }
    else{ //if left
        console.log(leftHandLetters[Letter]);
        let imageURL = leftHandLetters[Letter];// get image url // finds matching letter, 
        var img = document.createElement('img');
        img.src = imageURL;
        document.querySelector('.imagez').appendChild(img); //draw
    }
}


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



// Pretend to be a real input box ============================================||
let inputBox = document.querySelector(".insertTextField");
let inputActivated = false

function activateInput(){
    console.log("Input box clicked")
    if (!inputActivated){
        inputActivated = true;
        inputBox.style.border = "thick solid #e8ba67";
    } 
    else if(inputActivated){
        inputActivated = false;
        inputBox.style.border = "pink";
    }
}

inputBox.addEventListener("click", activateInput);



// Switch left and right () ============================================||
let isRight = true;
let buttonR = document.querySelector(".buttonR");
let buttonL = document.querySelector(".buttonL");

function switchToRIGHTHand(){
    if (isRight){
        isRight = false; //Switches state
        console.log("Switched to RIGHT hand")
        buttonR.style.backgroundColor ='#74C1DC'; //Left button gets darker (css)
        buttonR.style.filter ='drop-shadow(0px 0px 0px)';
        buttonR.style.marginLeft = '10px, 11px, 0px, 9px';
        buttonL.style.backgroundColor = '#8ADB6B';
        buttonL.style.filter = 'drop-shadow(-1px 2px 0px #075313)';
        //Switch to left button array // not needed, we'll just check the bool when drawing
            //Switch current displayed fingerspelling images to left TODO
    }
    else {
        console.log("Already set to right hand")
    }
}

function switchToLEFTHand(){
    if (!isRight){
        isRight = true; //Switches state
        console.log("Switched to LEFT hand")
        buttonL.style.backgroundColor ='#85d067'; //Left button gets darker (css)
        buttonL.style.filter ='drop-shadow(0px 0px 0px)';
        buttonL.style.marginLeft = '10px, 11px, 0px, 9px';
        buttonR.style.backgroundColor = '#74C1DC';
        buttonR.style.backgroundColor.hover = '#74C1DC';
        buttonR.style.filter = 'drop-shadow(-1px 2px 0px  #075313)';
        
        //Switch to left button array // not needed, we'll just check the bool when drawing
        //Switch current displayed fingerspelling images to left TODO
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
        typeName();
    } else if ( key == 'B' ) {
        console.log("'B' key is pressed");
        nameArray.push('B');
        typeName();
    } else if ( key == 'C' ) {
        console.log("'C' key is pressed");
        nameArray.push('C');
        typeName();
    } else if ( key == 'D' ) {
        console.log("'D' key is pressed");
        nameArray.push('D');
        typeName();
    } else if ( key == 'E' ) {
        console.log("'E' key is pressed");
        nameArray.push('E');
        typeName();
    } else if ( key == 'F' ) {
        console.log("'F' key is pressed");
        nameArray.push('F');
        typeName();
    } else if ( key == 'G' ) {
        console.log("'G' key is pressed");
        nameArray.push('G');
        typeName();
    } else if ( key == 'H' ) {
        console.log("'H' key is pressed");
        nameArray.push('H');
        typeName();
    } else if ( key == 'I' ) {
        console.log("'I' key is pressed");
        nameArray.push('I');
        typeName();
    } else if ( key == 'J' ) {
        console.log("'J' key is pressed");
        nameArray.push('J');
        typeName();
    } else if ( key == 'K' ) {
        console.log("'K' key is pressed");
        nameArray.push('K');
        typeName();
    } else if ( key == 'L' ) {
        console.log("'L' key is pressed");
        nameArray.push('L');
        typeName();
    } else if ( key == 'M' ) {
        console.log("'M' key is pressed");
        nameArray.push('M');
        typeName();
    } else if ( key == 'N' ) {
        console.log("'N' key is pressed");
        nameArray.push('N');
        typeName();
    } else if ( key == 'O' ) {
        console.log("'O' key is pressed");
        nameArray.push('O');
        typeName();
    } else if ( key == 'P' ) {
        console.log("'P' key is pressed");
        nameArray.push('P');
        typeName();
    } else if ( key == 'Q' ) {
        console.log("'Q' key is pressed");
        nameArray.push('Q');
        typeName();
    } else if ( key == 'R' ) {
        console.log("'R' key is pressed");
        nameArray.push('R');
        typeName();
    } else if ( key == 'S' ) {
        console.log("'S' key is pressed");
        nameArray.push('S');
        typeName();
    } else if ( key == 'T' ) {
        console.log("'T' key is pressed");
        nameArray.push('T');
        typeName();
    } else if ( key == 'U' ) {
        console.log("'U' key is pressed");
        nameArray.push('U');
        typeName();
    } else if ( key == 'V' ) {
        console.log("'V' key is pressed");
        nameArray.push('V');
        typeName();
    } else if ( key == 'W' ) {
        console.log("'W' key is pressed");
        nameArray.push('W');
        typeName();
    } else if ( key == 'X' ) {
        console.log("'X' key is pressed");
        nameArray.push('X');
        typeName();
    } else if ( key == 'Y' ) {
        console.log("'Y' key is pressed");
        nameArray.push('Y');
        typeName();
    } else if ( key == 'Z' ) {
        console.log("'Z' key is pressed");
        nameArray.push('Z');
        typeName();
    } else if ( event.key == ' ' ) {
        console.log("'Space' key is pressed");
        nameArray.push(' ');
        typeName();
    } else if ( event.key === 'Enter' ) {
        console.log("'Enter' key is pressed");
        console.log(nameArray);
        saveEnter;
    } 
    getTranslate();
}

window.onkeydown = function(event) {
    if ( event.key === 'Delete' || event.inputType === "deleteContentBackward" || event.key === 'Backspace') {
        console.log("'Delete' key is pressed");
        nameArray.pop();
        typeName();
    }
}

// Storing correct translate files () ============================================||

let rightHandLetters = {
    "A" : "images/right_a.jpg",
    "B" : "images/right_b.jpg",
    "C" : "images/right_c.jpg",
    "D" : "images/right_d.jpg",
    "E" : "images/right_e.jpg",
    "F" : "images/right_f.jpg",
    "G" : "images/right_g.jpg",
    "H" : "images/right_h.jpg",
    "I" : "images/right_i.jpg",
    "J" : "images/right_j.jpg",
    "K" : "images/right_k.jpg",
    "L" : "images/right_l.jpg",
    "M" : "images/right_m.jpg",
    "N" : "images/right_n.jpg",
    "O" : "images/right_o.jpg",
    "P" : "images/right_p.jpg",
    "Q" : "images/right_q.jpg",
    "R" : "images/right_r.jpg",
    "S" : "images/right_s.jpg",
    "T" : "images/right_t.jpg",
    "U" : "images/right_u.jpg",
    "V" : "images/right_v.jpg",
    "W" : "images/right_w.jpg",
    "X" : "images/right_x.jpg",
    "Y" : "images/right_y.jpg",
    "Z" : "images/right_z.jpg",
    " " : "images/Space.jpg"
}

let leftHandLetters = {
    "A" : "images/left_a.jpg",
    "B" : "images/left_b.jpg",
    "C" : "images/left_c.jpg",
    "D" : "images/left_d.jpg",
    "E" : "images/left_e.jpg",
    "F" : "images/left_f.jpg",
    "G" : "images/left_g.jpg",
    "H" : "images/left_h.jpg",
    "I" : "images/left_i.jpg",
    "J" : "images/left_j.jpg",
    "K" : "images/left_k.jpg",
    "L" : "images/left_l.jpg",
    "M" : "images/left_m.jpg",
    "N" : "images/left_n.jpg",
    "O" : "images/left_o.jpg",
    "P" : "images/left_p.jpg",
    "Q" : "images/left_q.jpg",
    "R" : "images/left_r.jpg",
    "S" : "images/left_s.jpg",
    "T" : "images/left_t.jpg",
    "U" : "images/left_u.jpg",
    "V" : "images/left_v.jpg",
    "W" : "images/left_w.jpg",
    "X" : "images/left_x.jpg",
    "Y" : "images/left_y.jpg",
    "Z" : "images/left_z.jpg",
     " " : "images/Space.jpg"
}