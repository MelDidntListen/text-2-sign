let textInput = document.querySelector("textInput");

//main func
function typeName(){
    clearName() //Clear all letters in finger spelling images
    updateNameLetters(); //Split current input into array of letters
    getTranslate() // get translation finger spelling image to match
    drawFSimages(); // draw images

    //tester of current values
    console.log(nameLetters); // Output: ["H", "e", "l", "l", "o"]
};

textInput.addEventListener("input", typeName);
let currentName = InputEvent.data;


// functions called in typeName() ============================================||

// Makes the string into an array of letters
function updateNameLetters(){
    const nameLetters = currentName.split(""); 
};

let nameLetterPS = [""];

function getTranslate(){

    nameLetterPS = [""];
};

function drawFSimages(){
    return;
};


// functions called in saveEnter() ============================================||
onkeyup = (Enter) => {};
let submitButton = document.querySelector(".submit");

function saveEnter(){
    console.log(currentName);
    if (input){//input is of text
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

addEventListener("keyup", (Enter) => {});
submitButton.addEventListener("click", saveEnter);



// functions called in clearName() ============================================||

let clearButton = document.querySelector(".clear");

function clearName(){
    foreach 
    //Clear current text input
	//Clear current fingerspelling images

}

addEventListener("keyup", (Delete) );
clearButton.addEventListener("click", clearName);

// Qould need delete, backspace (mobile), and button

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