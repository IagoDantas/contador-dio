let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function turnRed(){
	if(count < 0){
		CURRENT_NUMBER.style.color = '#D4133C';
	}
	else{
		CURRENT_NUMBER.style.color = '#000';
	}
}

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	turnRed();
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	turnRed();
}
