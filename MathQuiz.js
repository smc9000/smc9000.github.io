var q = 1; //question #
function start() {
    $("#q2").hide();
    $("#q3").hide();
    //add more for more questions
}
function nextQ() {
    q++;
    update();
}
function update() {
    //hide all
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    //show next Q
    $("#q"+q).show();
}

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;

	if (question1 == "4") {
		correct++;
}
	if (question2 == "9") {
		correct++;
}	
	if (question3 == "5") {
		correct++;
	}
	if (question4 == "9") {
		correct++;
}	
	if (question5 == "https://upload.wikimedia.org/wikipedia/commons/8/82/Blue_Square.svg") {
		correct++;
	}


	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["You pass the quiz", "You fail the quiz"];
	var result = ["Correct!", "Wrong Answer!"];
	var correct = "Correct!";
	var wrong = "Wrong Answer!";
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 0 && correct < 3) {
		score = 3;
	}

	if (correct == 3) {
		score = 2;
	}

	if (correct == 4) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}


	document.getElementbyId("correct").innerHTML = correct;
	document.getElementbyId("wrong").innerHTML = wrong;
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
