timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}else{
        window.location.replace("http://www.w3schools.com");
    }
};

setTimeout(countdown, 1000);