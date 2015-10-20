var gradeTest = function() {
	var answer1 = document.getElementById("q1Answer").value.toLowerCase();
	var answer2 = document.getElementById("q2Answer").value.toLowerCase();
	var answer3 = document.getElementById("q3Answer").value.toLowerCase();
	var answer4 = document.getElementById("q4Answer").value.toLowerCase();
	var answer5 = document.getElementById("q5Answer").value.toLowerCase();
	var answer6 = document.getElementById("q6Answer").value.toLowerCase();
	var answer7 = document.getElementById("q7Answer").value.toLowerCase();
	var answer8 = document.getElementById("q8Answer").value.toLowerCase();
	
	var correctQ = 0;
	var questionCount = 8;
	var totalPoints = 0;
	var letterGrade = "Z";
	
	if (answer1 === "french gothic")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q1Answer").style.setProperty("color", "red");
		document.getElementById("q1Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA1").innerHTML = "French Gothic";
	}
	
	if (answer2 === "napoleon bonaparte" || answer2 === "napoleon")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q2Answer").style.setProperty("color", "red");
		document.getElementById("q2Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA2").innerHTML = "Napoleon Bonaparte";
	}
	
	if (answer3 === "dark side of the moon")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q3Answer").style.setProperty("color", "red");
		document.getElementById("q3Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA3").innerHTML = "Dark Side of the Moon";
	}
	
	if (answer4 === "100,000" || answer4 === "100000")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q4Answer").style.setProperty("color", "red");
		document.getElementById("q4Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA4").innerHTML = "100,000";
	}
	
	if (answer5 === "potassium chlorate")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q5Answer").style.setProperty("color", "red");
		document.getElementById("q5Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA5").innerHTML = "Potassium Chlorate";
	}
	
	if (answer6 === "azrael")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q6Answer").style.setProperty("color", "red");
		document.getElementById("q6Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA6").innerHTML = "Azrael";
	}
	
	if (answer7 === "montgomery burns" || answer7 === "mr. burns")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q7Answer").style.setProperty("color", "red");
		document.getElementById("q7Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA7").innerHTML = "Montgomery Burns";
	}
	
	if (answer8 === "bruce lee")
	{
		correctQ += 1;
	}
	else
	{
		document.getElementById("q8Answer").style.setProperty("color", "red");
		document.getElementById("q8Answer").style.setProperty("text-decoration", "line-through");
		document.getElementById("correctA8").innerHTML = "Bruce Lee";
	}
	
	totalPoints = (100 / questionCount) * correctQ;
	
	if (totalPoints <= 100 && totalPoints >= 93)
	{
		letterGrade = "A";
	}
	if (totalPoints < 93 && totalPoints >= 90)
	{
		letterGrade = "A-";
	}
	if (totalPoints < 90 && totalPoints >= 87)
	{
		letterGrade = "B+";
	}
	if (totalPoints < 87 && totalPoints >= 83)
	{
		letterGrade = "B";
	}
	if (totalPoints < 83 && totalPoints >= 80)
	{
		letterGrade = "B-";
	}
	if (totalPoints < 80 && totalPoints >= 77)
	{
		letterGrade = "C+";
	}
	if (totalPoints < 77 && totalPoints >= 73)
	{
		letterGrade = "C";
	}
	if (totalPoints < 73 && totalPoints >= 70)
	{
		letterGrade = "C-";
	}
	if (totalPoints < 70 && totalPoints >= 67)
	{
		letterGrade = "D+";
	}
	if (totalPoints < 67 && totalPoints >= 63)
	{
		letterGrade = "D";
	}
	if (totalPoints < 63 && totalPoints >= 60)
	{
		letterGrade = "D-";
	}
	if (totalPoints < 60)
	{
		letterGrade = "F";
	}
	
	document.getElementById("results").innerHTML = "You got " + correctQ + "/" + questionCount + " correct answers.  That's a " + totalPoints + "%, which is a " + letterGrade + " on the South Hills grading scale.";
	
}