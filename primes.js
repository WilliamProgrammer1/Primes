"use strict"


function checkNumber() {
    let numberField = document.getElementById("numberToCheck");
    let number = numberField.value;
    if(isNaN(number)) {
        alert("stop being stupid");
        return;
    }

    let answer = "";


    //find correct answer
    if(isPrime(number)) {
        answer = number + " is prime"
    } else {
        answer = number + " is very not prime"
    }

    alert(answer)
}

function isPrime(number) {
    if(number <= 1) {
        return false;
    }
    if(number == 2) {
        return true;
    }

    for(let candidate = 2; candidate <= Math.sqrt(number); candidate += 1) {
        if(number % candidate == 0) {
            return false;
        }
    }
    return true;
}

function getListOfPrimes() {
    let numberDesired = +(prompt("How many you want??"))

    let answer = ""

    let numberFound = 0
    let candidate = 2
    while(numberFound < numberDesired) {
        if(isPrime(candidate)) {
            answer += candidate + "<br>"
            numberFound++
        }
        candidate++
    }

    document.getElementById("primeList").innerHTML = answer
}
