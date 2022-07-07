function comp(){
       var p=document.getElementById('t1').value;
	   var r=document.getElementById('t2').value;
	   var t=document.getElementById('t3').value;
	   //var n=document.getElementById(t4').value;
	   //var com_interest=parseInt(p)+((1+(parseInt(r)/parseInt(n)))/100)** (parseInt(n)*parseInt(t));
	   var amt = parseInt(p)*Math.pow((1+parseInt(r)/100),parseInt(t));
	   document.getElementById('t5').value=amt;
}

