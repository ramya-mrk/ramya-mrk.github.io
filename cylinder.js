function area(){
    var r= document.getElementById('t1').value;
	var h= document.getElementById('t2').value;
	var a= 2*3.14*parseInt(r)*parseInt(h);
	document.getElementById('t3').value=a;
	var volume= 3.14* (parseInt(r)**2) * parseInt(h);
	document.getElementById('t4').value=volume;
}