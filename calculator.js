function addition(){
	var n1=document.getElementById('t1').value;
	var n2=document.getElementById('t2').value;
	var sum=parseInt(n1)+ parseInt(n2);
	document.getElementById('t3').value=sum;
}

function subtraction(){
	var n1=document.getElementById('t1').value;
	var n2=document.getElementById('t2').value;
	var sub=parseInt(n1)- parseInt(n2);
	document.getElementById('t4').value=sub;
}

function multiplication(){
	var n1=document.getElementById('t1').value;
	var n2=document.getElementById('t2').value;
	var pro=parseInt(n1)* parseInt(n2);
	document.getElementById('t5').value=pro;
}
function division(){
	var n1=document.getElementById('t1').value;
	var n2=document.getElementById('t2').value;
	var div=parseInt(n1)/ parseInt(n2);
	document.getElementById('t6').value=div;
}