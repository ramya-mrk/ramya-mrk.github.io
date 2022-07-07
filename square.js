function area(){
    var side= document.getElementById('t1').value;
	var a= parseInt (side)**2;
	document.getElementById('t2').value=a;
	var peri= 4 * parseInt(side);
	document.getElementById('t3').value=peri;
}