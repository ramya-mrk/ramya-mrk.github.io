function area(){
    var l= document.getElementById('t1').value;
	var b= document.getElementById('t2').value;
	var a= parseInt(l)*parseInt(b);
	document.getElementById('t3').value=a;
	var peri= 2 * (parseInt(l)+parseInt(b));
	document.getElementById('t4').value=peri;
}