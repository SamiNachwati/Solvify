/*
Author: Sami Nachwati
file: mechanics.js
page description: a JS file containing the functions for the index webpage 
*/


// first function:
function group_1_choice_1() {
    result = document.getElementById("q1_output"); 
    input_value = document.getElementById("q1_input").value;
    if(isNaN(input_value)){
        result.innerHTML = "Not a number";
    }
    else {
        console.log("wewe")
        if(input_value == 0 || input_value >= 13 && input_value <= 17){
            result.innerHTML = "In range";    
        }
        else{
            result.innerHTML = "Out of range";
        }
    }

}
       


// second function
function group_1_choice_3(){
    output = document.getElementById("q2_output");
    val = document.getElementById("q2_input").value;
    if(isNaN(val)){
        output.innerHTML = "Can't calculate";
    }
    else if(!isNaN(val) || val >= 0){
        let perimeter = val*4;
        let area = val*val;
        output.innerHTML = "Perimeter: " + perimeter + "\nArea: " + area;

    }

}


// third function
function group_2_choice_1(){
    let vowels = "aeiouAEIOU";
    let y = document.getElementById("q3_output");
    let x = document.getElementById("q3_input").value;
    for(let u = 0; u < vowels.length; u++){
        if(x == vowels[u]){
            y.innerHTML = "A Vowel";
            return;
        }
    }
    if(x == "y" || x == "Y"){
        y.innerHTML = "Sometimes";
    }
    else{
        y.innerHTML = "Not a vowel";
    }
}



// fourth function
function group_2_choice_2(){
    let final_output = document.getElementById("q4_output");
    let user_value = document.getElementById("q4_input").value;
    let p = 1;
    if(user_value > 0){
        for(let i = 1; i < user_value; i++){
            p*=i+1;
            final_output.innerHTML = p;
        }
    }
    else{
        final_output.innerHTML = "Cannot compute factorial value";
    }
}


// fifth function 
function group_3_choice_1(){
    let r = document.getElementById("q5_output");
    let binary_value = document.getElementById("q5_input").value;
    let s = 0;
    if(binary_value.length >= 10 && binary_value.length <= 20 &&(!isNaN(binary_value))){
        for(let n = 0; n < binary_value.length; n++){
            if(binary_value[n] <= 1 && binary_value[n] >= 0){
                // console.log("binary value " + binary_value);
                s += binary_value[n] * 2 ** n;
                r.innerHTML = "Decimal Value: " + s;
            }
            else{
                r.innerHTML = 0;
                break;
            }
        }   
    }
    else{
        r.innerHTML = 0;
    }
}


  
  
