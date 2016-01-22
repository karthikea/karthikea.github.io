function getYear(){
	 var val=$("#year option:selected").text();
	document.getElementById("acYear").innerHTML=val;
}
function getName(){
    var x=document.getElementById("name").value;
	document.getElementById("edName").innerHTML=x;
}
function getDistrict(){
	var val=$("#district option:selected").text();
	document.getElementById("selDistrict").innerHTML=val;
}
function getSchool(){
     var x=document.getElementById("school").value;
	document.getElementById("selSchool").innerHTML=x;
}
function getSubject(){
    var val=$("#subject option:selected").text();
	document.getElementById("selSub").innerHTML=val;
}
function getCourse(){
     var x=document.getElementById("course").value;
	document.getElementById("selCor").innerHTML=x;
}
function getGrade(){
    var val=$("#grade option:selected").text();
	document.getElementById("selGra").innerHTML=val;
}
function getInterval(){
    var val=$("#interval option:selected").text();
	document.getElementById("selInt").innerHTML=val;
}

function getStartDate(){
    var val=document.getElementById("start").value;
	document.getElementById("sd").innerHTML=val;
}
function getEndDate(){
    var val=document.getElementById("end").value;
	document.getElementById("ed").innerHTML=val;
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
    var val=$("#method option:selected").text();
	document.getElementById("selMet").innerHTML=val;
}
function getAssess(){
    var x=$("#assessment option:selected").text();
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
    var x=document.getElementById("rating").innerHTML;
	document.getElementById("e1").innerHTML=x;
}

function getEval2(){
    var x= document.getElementById("percent").innerHTML;
	document.getElementById("e2").innerHTML=x;
}

function getRating1(){
	var x=document.getElementById("Uub").value;
	document.getElementById("r1").innerHTML="0%-"+x+"%";
}

function getRating2(){
	var x=document.getElementById("NIlb").value;
	var y=document.getElementById("NIub").value;
	document.getElementById("r2").innerHTML=x+"%-"+y+"%";
}

function getRating3(){
	var x=document.getElementById("Plb").value;
	var y=document.getElementById("Pub").value;
	document.getElementById("r3").innerHTML=x+"%-"+y+"%";
}

function getRating4(){
	var x=document.getElementById("Elb").value;
	document.getElementById("r4").innerHTML=x+"%-100%";
}
	
function next1(){
/**
	jQuery("#tab9").hide();//.hide()
	jQuery("#tab8").show();//attr('class','tab active');
		
	jQuery("#t8").addClass('active');
	jQuery("#t9").removeClass('active');
	**/
	$('.target-tab-link2').triggerHandler('click');
	$('html,body').scrollTop(0);
}

function next2(){
	$('.target-tab-link3').triggerHandler('click');
	$('html,body').scrollTop(0);
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
	//getStartDate();
	//getEndDate();
	//getCheckIns();
	
	
	
 
        // Change tab 
		/**
        jQuery("#tab1").hide();
		jQuery("#tab2").show();
		
		jQuery("#t2").addClass('active');
		jQuery("#t1").removeClass('active');
		$('html,body').scrollTop(0);
        **/
		$('.target-tab-link4').triggerHandler('click');
		//$('html,body').scrollTop(0);
      
}
function submitElement1(){
	getGoal();
	getStandards();
	getPop();
	getMethod();
	
	// Change tab 
	/**
        jQuery("#tab2").hide();
		jQuery("#tab3").show();
		
		jQuery("#t3").addClass('active');
		jQuery("#t2").removeClass('active');
		$('html,body').scrollTop(0);
	**/
	$('.target-tab-link5').triggerHandler('click');
}
function submitElement2(){
    getAssess();
   getAssess1();
	//getAssess2();
	getAssess3();
	
	// Change tab 
	/**
        jQuery("#tab3").hide();
		jQuery("#tab4").show();
		
		jQuery("#t4").addClass('active');
		jQuery("#t3").removeClass('active');
		$('html,body').scrollTop(0);
		**/
		$('.target-tab-link6').triggerHandler('click');
}
function submitElement3(){
    getGrowth1();
	getGrowth2();
	getGrowth3();
	getGrowth4();
	//getGrowth5();
	// Change tab 
	/**
        jQuery("#tab4").hide();
		jQuery("#tab5").show();
		
		jQuery("#t5").addClass('active');
		jQuery("#t4").removeClass('active');
		$('html,body').scrollTop(0);
    **/
	$('.target-tab-link7').triggerHandler('click');
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
	/**
        jQuery("#tab5").hide();
		jQuery("#tab7").show();
		
		jQuery("#t7").addClass('active');
		jQuery("#t5").removeClass('active');
		$('html,body').scrollTop(0);
		**/
		$('.target-tab-link8').triggerHandler('click');

}
function pubChange(){
    var pub=$("#Pub").val();
	var elb=parseInt(pub)+1;
	$("#Elb").val(elb);
}

function uubChange(){
    var uub=$("#Uub").val();
	var nilb=parseInt(uub);
	$("#NIlb").val(nilb);
	$("#NIub").attr("min",nilb+1);
}

function niubChange(){
    var niub=$("#NIub").val();
	var plb=parseInt(niub)+1;
	$("#Plb").val(plb);
	$("#Pub").attr("min",plb+1);
}

function calculate(){
	 var total=$("#total").val();
	 var achieved=$("#achieved").val();
	 var uub=$("#Uub").val();
	 var pub=$("#Pub").val();
	 var niub=$("#NIub").val();
	 var plb=$("#Plb").val();
	 var nilb=$("#NIlb").val();
	 var total=$("#total").val();
	 var achieved=$("#achieved").val();
	 var x=(achieved/total);
	 
	 
	 
	 
	 var FirstQ=parseInt(uub)/100;
	 var SecondQ=(parseInt(niub)/100);
	 //var ThridQ=parseInt(pub)/100;
	 
	 
	    
		if (x<(uub/100)){
	      document.getElementById("rating").innerHTML="Unsatisfactory ";
		}
		if(x>=FirstQ&&x<=SecondQ){
			document.getElementById("rating").innerHTML="Needs Improvement ";
		}
		if(x>SecondQ&&x<=(pub/100)){
			document.getElementById("rating").innerHTML="Proficient";
		}
		if(x>(pub/100)){
			document.getElementById("rating").innerHTML="Excellent ";
		}
	  
	  var percent=x*100;
	  document.getElementById("percent").innerHTML=Math.ceil(percent)+"%";
	  document.getElementById("e2").innerHTML=percent+"%";
 }

	 