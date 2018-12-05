var svgDocument
var stage = 1
var guess = "0"
var real = "0"
var d2 = 1
var red = false

function on_load(evt){
	O=evt.target
	svgDocument=O.ownerDocument
	/*
	for (i = 1; i < 7; i++) {
		hide("d1_" + i)
		hide("d2_" + i)
	}
	svgDocument.onclick = roll_dice
	*/
	roll_dice()
}

function show(id){
   svgDocument.getElementById(id).style.display = "inline"
}

function hide(id){
   svgDocument.getElementById(id).style.display = "none"
}

function updateText(id,text){
   svgDocument.getElementById(id).textContent = text
}

function roll_dice(){
	if (red){
		red = false
		hide("red_dot")
	} else {
		red = true
		show("red_dot")
	}

	if (stage == 1) {
	var dare = prompt("Player 1, Enter your dare:", "")
	updateText("dare_txt",dare)
	} 
	if (stage == 2) {
	var odds = prompt("Player 2, Enter your odds:", "")
	updateText("odds_txt",odds)
	}

	if (stage == 3) {
	guess = prompt("Player 1, Enter your guess:", "")
	updateText("guess_txt","***")
	}

	if (stage == 4) {
	real = prompt("Player 2, Enter your actual:", "")
	updateText("real_txt",real)
	}

	if (stage == 5) {
		var msg = "Player 2 Wins!"
		updateText("guess_txt",guess)
		if (guess == real) {
			msg = "Player 1 Wins!"
		}
		updateText("result_txt",msg)
	}

	stage += 1

	/*
	hide("d1_" + d1)
	hide("d2_" + d2)
	d1 = Math.floor((Math.random() * 6) + 1)
	d2 = Math.floor((Math.random() * 6) + 1)
	show("d1_" + d1)
	show("d2_" + d2)
  console.log(d1,d2)
	*/
}
