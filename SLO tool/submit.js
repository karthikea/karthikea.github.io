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
    var x=document.getElementById("standard").value;
	document.getElementById("selStan").innerHTML=x;
}
function getPop(){
    var x=document.getElementById("pop").value;
	document.getElementById("selPop").innerHTML=x;
}
function getMethod(){
    var val=$('#method').combobox('getText');
	document.getElementById("selMet").innerHTML=val;
}
function getAssess1(){
    var x=document.getElementById("assess1").value;
	document.getElementById("a1").innerHTML=x;
}
function getAssess2(){
    var x=document.getElementById("assess2").value;
	document.getElementById("a2").innerHTML=x;
}

function next(){
	jQuery("#tab9").hide();//.hide()
	jQuery("#tab1").show();//attr('class','tab active');
		
	jQuery("#t1").addClass('active');
	jQuery("#t9").removeClass('active');
}

function submitElement0(){
    getYear();
	getName();
	getSubject();
	getCourse();
	getGrade();
	getInterval();
	getStandardsLinks();
	//getCheckIns();
	
	
	
 
        // Change tab 
        jQuery("#tab1").hide();
		jQuery("#tab2").show();
		
		jQuery("#t2").addClass('active');
		jQuery("#t1").removeClass('active');
 
      
}
function submitElement1(){
	getGoal();
	getStandards();
	getPop();
	getMethod();
	
	// Change tab 
        jQuery("#tab2").hide();
		jQuery("#tab3").show();
		
		jQuery("#t3").addClass('active');
		jQuery("#t2").removeClass('active');
	
}
function submitElement2(){
    getAssess1();
	getAssess2();
	
	// Change tab 
        jQuery("#tab3").hide();
		jQuery("#tab4").show();
		
		jQuery("#t4").addClass('active');
		jQuery("#t3").removeClass('active');
}
function submitElement3(){

	// Change tab 
        jQuery("#tab4").hide();
		jQuery("#tab5").show();
		
		jQuery("#t5").addClass('active');
		jQuery("#t4").removeClass('active');

}
function submitElement4(){

	// Change tab 
        jQuery("#tab5").hide();
		jQuery("#tab6").show();
		
		jQuery("#t6").addClass('active');
		jQuery("#t5").removeClass('active');

}
function submitElement5(){
	// Change tab 
        jQuery("#tab6").hide();
		jQuery("#tab7").show();
		
		jQuery("#t7").addClass('active');
		jQuery("#t6").removeClass('active');

}