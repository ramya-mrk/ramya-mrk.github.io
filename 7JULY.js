function multiply(){
	var a=document.getElementById('t1').value;
	var mul= parseInt(a)*2;
	document.getElementById('t1').value=mul;
	console.log(mul);
	
}

function doub(){
	var a= document.getElementById('t1').value;
    document.getElementById('result').textContent='Result is '+ 2*a;
}

function clr(){
	document.getElementById('t1').value='';
    document.getElementById('result').textContent='Result is'+ '';
}

