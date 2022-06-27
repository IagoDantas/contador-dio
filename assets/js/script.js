let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const INCREMENT = document.getElementById('increment');
const DECREMENT = document.getElementById('decrement');



function turnRed(){
	if(count < 0){
		CURRENT_NUMBER.style.color = '#D4133C';
	}
	else{
		CURRENT_NUMBER.style.color = '#000';
	}
}

INCREMENT.addEventListener("click", function () {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	turnRed();
})

DECREMENT.addEventListener("click", function () {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	turnRed();
})
