/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");

// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");


/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

//Gestisco gli eventi
let seconds = 0;
let interval;
btnPlay.addEventListener("click", function () {
	console.log("Premuto Play!");
	btnPlay.disabled = true;
	interval = setInterval(function () {
		seconds++;
		document.getElementById("cronometro").innerHTML = seconds;
	}, 1000);
});

btnStop.addEventListener("click", function () {
	console.log("Premuto Stop!");
});

btnReset.addEventListener("click", function () {
	console.log("Premuto Reset!");
});


//impostazione width e cronometro
let time = 0

document.getElementById("progress").style.width = "0%";

const timer = setInterval(function () {
	time++;
	document.getElementById("progress").style.width = time + "%";
	if (time === 100) {
		document.getElementById("loading-title").innerHTML = "Caricamento completato";
		clearInterval(timer);
	} else {
		document.getElementById("loading-title").innerHTML = "Loading...";
	}
}, 100);