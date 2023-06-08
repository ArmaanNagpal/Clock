function clock(){
	var dt= new Date();
	var m= dt.getMonth();
	var y= dt.getFullYear();
	var d= dt.getDate();
	switch(m){
		case 0:
			m= 'Jan'
			break;
		case 1:
			m= 'Feb'
			break;
		case 2:
			m= 'Mar'
			break;
		case 3:
			m= 'Apr'
			break;
		case 4:
			m= 'May'
			break;
		case 5:
			m= 'Jun'
			break;
		case 6:
			m= 'Jul'
			break;
		case 7:
			m= 'Aug'
			break;
		case 8:
			m= 'Sep'
			break;
		case 9:
			m= 'Oct'
			break;
		case 10:
			m= 'Nov'
			break;
		case 11:
			m= 'Dec'
			break;
		default:
			break;
	}
	document.getElementById('top').innerHTML=m+" "+d+","+" "+y;

	var h= dt.getHours();
	var mi= dt.getMinutes();
	if(h>12){
		h=h-12;
		document.getElementById('ampm').innerHTML='PM'
	}
	if(h<10){
		h='0' + h;
	}
	if(mi<10){
		mi='0' + mi;
	}
	document.getElementById('midl').innerHTML=h;
	document.getElementById('midr').innerHTML=mi;

	var dy= dt.getDay();

	switch(dy){
		case 1:
			dy='Monday'
			break;
		case 2:
			dy='Tuesday'
			break;
		case 3:
			dy='Wednesday'
			break;
		case 4:
			dy='Thursday'
			break;
		case 5:
			dy='Friday'
			break;
		case 6:
			dy='Saturday'
			break;
		case 7:
			dy='Sunday'
			break;
		default:
			break;
	}
	document.getElementById('bot').innerHTML=dy;
	setTimeout(clock,1000)
	setInterval(checkalrm,500);

}
var a
var b
var c

function setalrm(){
		var a=parseInt(prompt('Enter Hours'))
		var b=prompt('Enter Minutes')
		var c=prompt('Enter AM / PM')
		checkalrm();
}

function checkalrm(){
		var dt= new Date();
		var hrs=dt.getHours();
		var mins=dt.getMinutes();
		if(c=='pm' || c=='PM'){
			a=a+12;
		}
		if(a==hrs && b==mins){
			alert('ALARM !!!')
		}
		console.log(a+' '+b+' '+c)
		}
	
