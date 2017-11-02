function getRadical() 
{
	var positive = false;
	var number = document.getElementById('number').value;
	var precision = document.getElementById('precision').value;
	if(number > 0 && precision > 0)
	{
		alert(getPrecision(calc(number), precision));

	}
	else alert('The number is not positive!')
}

function getPrecision(number,precision) // replace the point
{
	var factor = Math.pow(10, precision || 0);
	var v = (Math.round(Math.round(number * factor * 100)/100)/factor).toString();
	if (v.indexOf('.') >= 0) {
		return v + factor.toString().substr(v.length - v.indexOf('.'));
	}
	return v + '.' + factor.toString().substr(1);
}

function calc(number) // by the method of Nutone
{
	var t;
	var squareRoot = number / 2; 
	do 
	{
		t = squareRoot;
		squareRoot = (t+ (number / t)) / 2;
	} 
	while ((t - squareRoot) != 0);

	return squareRoot;
}