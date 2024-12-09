"use strict"

function fizzBuzz() {
    let output = document.getElementById("outputArea");
    let answer = "";

    //for the numbers 1 to 100
    for(let i = 1; i <= 100; i++) {
        //add to answer depending on the current number
        if(i % 3 == 0 && i % 5 == 0) {
            answer += "FizzBuzz<br>"
        } else if(i % 3 == 0) {
            answer += "Fizz<br>"
        } else if(i % 5 == 0) {
            answer += "Buzz<br>"
        } else {
            answer += i + "<br>"
        }
    }
        

    output.innerHTML = answer;
}

fizzBuzz()