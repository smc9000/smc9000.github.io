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
	if (question5 == "36") {
		correct++;
	}

	var score;

	var messages = ["You Pass! 100%", "You Pass! 80%", "You Fail! 60%", "You Fail! 40%", "You Fail! 20%","You Fail! 0%"];
	

	if (correct == 0){
	score = 5;
	}
	if (correct == 1) {
		score = 4;
	}

	if (correct == 2) {
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
	
	

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
	
