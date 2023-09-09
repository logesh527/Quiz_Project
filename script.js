
//declaration of the variables
let pos = 0, board, status, qus, choices, A, B, C, cor = 0;

//declaration of the Array

let questions = [
    ["How many days do we have in a week?", "Nine", "Six", "Seven", "One", "C"],
    ["How many days are there in a normal year?", "385", "326", "226", "365", "D"],
    ["Which month of the year has the least number of days?", "January", "March", "February", "December", "C"],
    ["How many primary colors are there?", "Three", "Six", "Seven", "One", "A"],
];

//creating the function

function displayQuestion() {
    board = document.getElementById("Board");
    if (pos >= questions.length) {
        board.innerHTML = "<h2>You got " + cor + " of " + questions.length + "</br> Great work!!!</h2>";
        document.getElementById("status").innerHTML = "Quiz completed";
     
        pos = 0;
        cor = 0;
        return false;
    }
    // printing the status of the Question
    document.getElementById("status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

    //Getting the questions from the array
    qus = questions[pos][0];
    A = questions[pos][1];
    B = questions[pos][2];
    C = questions[pos][3];
    D = questions[pos][4];

    //Displaying the questions
    board.innerHTML = "<h3>" + qus + "</h3>"
    board.innerHTML += "<label><input type='radio' name='Options' value='A'> " + A + "</label>";
    board.innerHTML += "<label><input type='radio' name='Options' value='B'> " + B + "</label>";
    board.innerHTML += "<label><input type='radio' name='Options' value='C'> " + C + "</label>";
    board.innerHTML += "<label><input type='radio' name='Options' value='D'> " + D + "</label>";
    board.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
   if(pos>=1 ){board.innerHTML += "<button onclick='PreviousAnswer()'>Previous</button>";
}
}

function checkAnswer() {
    let answer;
    choices = document.getElementsByName("Options");
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) 
        {
            answer = choices[i].value;
        }
    }
    if(answer==questions[pos][5])
    {
        cor++;
    }
    pos++;
    displayQuestion()
}
function PreviousAnswer()
{
    pos=1
    pos--;
    displayQuestion()
}