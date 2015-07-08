function getYear(){
	var x=document.getElementById("year").value;
	document.getElementById("acYear").innerHTML=x;
}
function getName(){
    var x=document.getElementById("name").value;
	document.getElementById("edName").innerHTML=x;
}
function getDistrict(){
    var val=$('#district').combobox('getText');
	document.getElementById("selDistrict").innerHTML=val;
}
function getSchool(){
     var x=document.getElementById("school").value;
	document.getElementById("selSchool").innerHTML=x;
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
function getAssess(){
    var x=$('#assessment').combobox('getText');
	document.getElementById("a").innerHTML=x;
}
function getAssess1(){
    var x=document.getElementById("assess1").value;
	document.getElementById("a1").innerHTML=x;
}
function getAssess2(){
    var x=document.getElementById("assess2").value;
	document.getElementById("a2").innerHTML=x;
}
function getAssess3(){
    var x=document.getElementById("assess3").value;
	document.getElementById("a3").innerHTML=x;
}
function getGrowth1(){
	 var x=document.getElementById("base").value;
	 document.getElementById("g1").innerHTML=x;
}
function getGrowth2(){
	 var x=document.getElementById("mid").value;
	 document.getElementById("g2").innerHTML=x;
}
function getGrowth3(){
	 var x=document.getElementById("midresp").value;
	 document.getElementById("g3").innerHTML=x;
}
function getGrowth4(){
	 var x=document.getElementById("middes").value;
	 document.getElementById("g4").innerHTML=x;
}

function getGrowth5(){
	 var x=document.getElementById("gr5").value;
	 document.getElementById("g5").innerHTML=x;
}

function getEval1(){
    var x=document.getElementById("rating").text;
	document.getElementById("e1").innerHTML=x;
}

function getEval2(){
    var x= document.getElementById("percent").text;
	document.getElementById("e2").innerHTML=x;
}

function getRating1(){
	var x=document.getElementById("U").value;
	document.getElementById("r1").innerHTML=x;
}

function getRating2(){
	var x=document.getElementById("NI").value;
	document.getElementById("r2").innerHTML=x;
}

function getRating3(){
	var x=document.getElementById("P").value;
	document.getElementById("r3").innerHTML=x;
}

function getRating4(){
	var x=document.getElementById("E").value;
	document.getElementById("r4").innerHTML=x;
}
	
function next1(){
	jQuery("#tab9").hide();//.hide()
	jQuery("#tab8").show();//attr('class','tab active');
		
	jQuery("#t8").addClass('active');
	jQuery("#t9").removeClass('active');
}

function next2(){
	jQuery("#tab8").hide();//.hide()
	jQuery("#tab1").show();//attr('class','tab active');
		
	jQuery("#t1").addClass('active');
	jQuery("#t8").removeClass('active');
}

function submitElement0(){
    getYear();
	getName();
	getSubject();
	getCourse();
	getGrade();
	getInterval();
	getStandardsLinks();
	getDistrict();
	getSchool();
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
    getAssess();
    getAssess1();
	getAssess2();
	getAssess3();
	
	// Change tab 
        jQuery("#tab3").hide();
		jQuery("#tab4").show();
		
		jQuery("#t4").addClass('active');
		jQuery("#t3").removeClass('active');
}
function submitElement3(){
    getGrowth1();
	getGrowth2();
	getGrowth3();
	getGrowth4();
	//getGrowth5();
	// Change tab 
        jQuery("#tab4").hide();
		jQuery("#tab5").show();
		
		jQuery("#t5").addClass('active');
		jQuery("#t4").removeClass('active');

}
/**
function submitElement4(){

	getEval1();
	getEval2();


	// Change tab 
        jQuery("#tab5").hide();
		jQuery("#tab").show();
		
		jQuery("#t6").addClass('active');
		jQuery("#t5").removeClass('active');

}
**/
function submitElement5(){
    
	getEval1();
	getEval2();
	getRating1();
	getRating2();
	getRating3();
	getRating4();
	
	
	// Change tab 
        jQuery("#tab5").hide();
		jQuery("#tab7").show();
		
		jQuery("#t7").addClass('active');
		jQuery("#t5").removeClass('active');

}

function calculate(){
	 var total=$("#total").val();
	 var achieved=$("#achieved").val();
	 
	 var x=achieved/total;
	 
	 if (x<.25){
	      document.getElementById("rating").innerHTML="Unsatisfactory ";
	 }
	 if(x>=.25&&x<=.5){
	  document.getElementById("rating").innerHTML="Needs Improvement ";
	 }
	 if(x>.5&&x<=.75){
	  document.getElementById("rating").innerHTML="Proficient ";
	  }
	  if(x>.75){
		document.getElementById("rating").innerHTML="Excellent ";
	  }
	  
	  var percent=x*100;
	  document.getElementById("percent").innerHTML=percent+"%";
	  document.getElementById("e2").innerHTML=percent+"%";
 }

	 