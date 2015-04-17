function getYear(){
	var x=document.getElementById("year").value;
	document.getElementById("acYear").innerHTML=x;
}
function getName(){
    var x=document.getElementById("name").value;
	document.getElementById("edName").innerHTML=x;
}
function getSubject(){
    var val=$('#subject').combobox('getText');
	document.getElementById("selSub").innerHTML=val;
}
function getCourse(){
     var x=document.getElementById("course").value;
	document.getElementById("selCor").innerHTML=x;
}
function getGrade(){
    var val=$('#grade').combobox('getText');
	document.getElementById("selGra").innerHTML=val;
}
function getInterval(){
    var val=$('#interval').combobox('getText');
	document.getElementById("selInt").innerHTML=val;
}
function getGoal(){
    var x=document.getElementById("lgoal").value;
	document.getElementById("lg").innerHTML=x;
}
function getStandards(){
    var val=$('#standard').combobox('getText');
	document.getElementById("selStan").innerHTML=val;
}
function getPop(){
    var x=document.getElementById("pop").value;
	document.getElementById("selPop").innerHTML=x;
}
function getMethod(){
    var val=$('#method').combobox('getText');
	document.getElementById("selMet").innerHTML=val;
}
function submitElement0(){
    getYear();
	getName();
	getSubject();
	getCourse();
	getGrade();
	getInterval();
}
function submitElement1(){
	getGoal();
	getStandards();
	getPop();
	getMethod();
}
function submitElement2(){

}
function submitElement3(){

}
function submitElement4(){

}
function submitElement5(){

}