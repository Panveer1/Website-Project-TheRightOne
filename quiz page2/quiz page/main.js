// JavaScript Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("q1").value;
  let answer2 = document.getElementById("q2").value;
  let answer3 = document.getElementById("q3").value;
  let answer4 = document.getElementById("q4").value;

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;
  // Process & Output
  if (answer1 == "Player" && "Soccer Player") {
    document.getElementById("q1").style.backgroundColor = "lightgreen";
    document.getElementById("out1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `Incorrect! The correct answer is Player or Soccer PLayer`;
    result1 = 0;
  }

  if (answer2 == "Hard Work") {
    document.getElementById("q2").style.backgroundColor = "lightgreen";
    document.getElementById("out2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `Incorrect! The correct answer is Hard Work`;
    result2 = 0;
  }

  if (answer3 == "Talent") {
    document.getElementById("q3").style.backgroundColor = "lightgreen";
    document.getElementById("out3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `Incorrect! The correct answer is Talent`;
    result3 = 0;
  }

  if (answer4 == "Yes") {
    document.getElementById("q4").style.backgroundColor = "lightgreen";
    document.getElementById("out4").innerHTML = `Correct!`;
    result4 = 1;
  } else {
    document.getElementById("q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `Incorrect! The correct answer is Yes`;
    result4 = 0;
  }

  let score = ((result1 + result2 + result3 + result4) / 4) * 100;
  let sum = result1 + result2 + result3 + result4;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `Please read again.`;
  } else if (sum == 2) {
    document.getElementById("output").innerHTML = `Halfway there.`;
  } else if (sum == 3) {
    document.getElementById("output").innerHTML = `Very close!`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `You aced this quiz, Congratulations!`;
  }
  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/4! (` + score + `%)`;
}
