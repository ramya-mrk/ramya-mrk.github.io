function num(){
    var num = '<table>';
    var num1 = document.getElementById('t1').value;
    var num2 = document.getElementById('t2').value;
	var str='<table class="table hover"><tbody>';
    for(i = parseInt(num1); i <= parseInt(num2) ; i++){
    num = num + '<tr><td> '+ (i*1) +' </td><td>'+ (i*2) +' </td><td> '+ (i*3) +' </td></tr>';
    }
    num = num + '</table>';
    document.getElementById('s1').innerHTML = num;
}