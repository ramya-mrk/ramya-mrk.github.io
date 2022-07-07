function area(){
    var r= document.getElementById('t1').value;
	var a= 3.14*parseInt (r)**2;
	document.getElementById('t2').value=a;
	var peri= 2* 3.14*parseInt(r);
	document.getElementById('t3').value=peri;
}