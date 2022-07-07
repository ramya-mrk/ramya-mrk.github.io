function sort(){
   var n1=document.getElementById('name1').value;
   var n2=document.getElementById('name2').value;
   console.log(n1.length);
   console.log(n2.length);
   
   if (n2.length > n1.length){
	   document.getElementById('name1').value=var n2;
	   document.getElementById('name2').value=var n1;
	  
   }	   
}

function ascend(){
	var a1=document.getElementById('name1').value;
	var a2=document.getElementById('name2').value;

    if(a1.length>a2.length){
	   document.getElementById('name1').value=var a2;
	   document.getElementById('name2').value=var a1;
	}
}
   