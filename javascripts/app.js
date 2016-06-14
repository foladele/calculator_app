var calc;
window.onload = function() {
	calc = document.getElementById('calc_value');
}


function addi(i) {
	// console.log(calc);
	calc.value += i;
}

function calculate()
{
	var result = eval(calc.value);
	calc.value = " ";
	calc.value += result;
}

function clear()
{
	calc.value = " ";
}