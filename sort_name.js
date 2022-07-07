function sort(){
   var n1=document.getElementById('name1').value;
   var n2=document.getElementById('name2').value;  
   if (n2.length > n1.length){
	   document.getElementById('name1').value=n2;
	   document.getElementById('name2').value=n1;
	  
   }	   
}

function ascend(){
	var a1=document.getElementById('name1').value;
	var a2=document.getElementById('name2').value;

    if(a1.length>a2.length){
	   document.getElementById('name1').value=a2;
	   document.getElementById('name2').value=a1;
	}
}
   
function rev_both(){
	var a =document.getElementById('name1').value; 
	var b =document.getElementById('name2').value;
	document.getElementById('name2').value= a;  
	document.getElementById('name1').value=b;
}

