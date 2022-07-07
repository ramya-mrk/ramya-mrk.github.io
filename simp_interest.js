function hello(){
	console.log('Hello,Calculator');
}

function simple(){
	
	var a1=document.getElementById('t1').value;
	var a2=document.getElementById('t2').value;
	var a3=document.getElementById('t3').value;
	var si = parseInt(a1)* parseInt(a2) * parseInt(a3) / 100;
	document.getElementById('t4').value=si;
	
	if(a1 == '' || a2 == '' || a3 == ''){
    document.getElementById('t4').value = 'Please Enter all the Value';
    }
	
}


	


	