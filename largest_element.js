function compare() {
    var result = document.getElementById('result');
    var first_number = document.getElementById('first_number').value;
    var second_number = document.getElementById('second_number').value;
    var third_number = document.getElementById('third_number').value;

    result.innerHTML = Math.max(first_number, second_number, third_number);
}

function multiplication() {
    var result = document.getElementById('result');
    var first_number = document.getElementById('first_number').value;
    var second_number = document.getElementById('second_number').value;

    result1 = first_number * second_number;
    result.innerHTML = result1;

}

function division() {
    var result = document.getElementById('result');
    var first_number = document.getElementById('first_number').value;
    var second_number = document.getElementById('second_number').value;

    result2 = first_number / second_number;
    result.innerHTML = result2;


}

function time() {
    var result = document.getElementById("hour");
    var result1 = document.getElementById("minit");
    var result2 = document.getElementById("sec");
    var num = document.getElementById("time").value;
    var hour = Math.trunc(num / 3600);
    var left_minit = num - 3600 * hour;
    var minit = Math.trunc(left_minit / 60);
    var left_sec = left_minit - minit * 60;

    result.innerHTML = hour + "hour ";
    result1.innerHTML = minit + "minit ";
    result2.innerHTML = left_sec + "sec ";
}

function leapYear() {
    var result = document.getElementById("result");
    var year = document.getElementById("year").value;
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        result.innerHTML = year + " The Year is leap year!!!";
    } else {
        result.innerHTML = year + " The year is not a leap year";
    }
}

function rand() {
    var result = document.getElementById("result");
    var input = document.getElementById("value").value;
    var rand = Math.trunc(Math.random() * 10);
    if (rand < 1) {
        rand = Math.trunc(rand + 1);
    }
    if (input == rand) {
        result.innerHTML = "Good Work....";
    } else {
        result.innerHTML = "Not Matched";

    }
}
function Age() {
    var input = document.getElementById("days").value;
    var result = document.getElementById("year");
    result.innerHTML = input / 365 + " years old";
}


function sum_of_array() {
    var result = document.getElementById("result");
    var array = [10, 20, 30, 40, 50, 60];

    var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    result.innerHTML = sum;
}

