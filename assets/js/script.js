let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const INCREMENT = document.getElementById('increment');
const DECREMENT = document.getElementById('decrement');

const turnRed = ()=>{
	if(count < 0){
		CURRENT_NUMBER.style.color = '#D4133C';
	}
	else{
		CURRENT_NUMBER.style.color = '#000';
	}
}
INCREMENT.addEventListener("click", function () {
	if(count <= 49 ){
		count++;
		CURRENT_NUMBER.innerHTML = count;
		turnRed();
	}
	else{
		INCREMENT.attributes.add("disabled");
	}
})

DECREMENT.addEventListener("click", function () {
	if(count >= -49 ){
		count--;
		CURRENT_NUMBER.innerHTML = count;
		turnRed();
	}
	else{
		DECREMENT.attributes.add("disabled");
	}
})

