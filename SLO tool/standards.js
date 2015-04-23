var mlinks=[
              {"name":"Math Common Core","link":"http://www.corestandards.org/Math/Content/2/introduction/"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];
  
var hlinks=[
              {"name":"UCLA History","link":"http://www.nchs.ucla.edu/history-standards/historical-thinking-standards"},
			  {"name":"Illinois State Board Standards","link":"http://www.isbe.net/ils/"},
			  {"name":"C3 Framework for Social Studies","link":"http://www.socialstudies.org/system/files/c3/C3-Framework-for-Social-Studies.pdf"}
];

var fllinks=[
              {"name":"ACTFL","link":"http://www.actfl.org/about-the-american-council-the-teaching-foreign-languages/resources"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var slinks=[
              {"name":"NGSS","link":"http://www.nextgenscience.org/next-generation-science-standards"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var slinks=[
              {"name":"NGSS","link":"http://www.nextgenscience.org/next-generation-science-standards"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];



function getStandardsLinks(){
	var subject=$('#subject').combobox('getText');
	
	

	if(subject=="Math"){
	
		createList(mlinks);
	}
	if(subject=="History"){
	
		createList(hlinks);
	}
	if(subject=="Foreign Language"){
	
		createList(fllinks);
	}
	if(subject=="Science"){
	
		createList(slinks);
	}
	/**
	if(subject==="http://www.corestandards.org/Math/Content/2/introduction/"){
	    va
	    var l1="http://www.corestandards.org/Math/Content/2/introduction/";
		select.append(
						$('<option></option>').val(1).html("123");
						);
	}
	**/
}

function createList(object){

	for(i=0;i<object.length;i++){
		var select = document.getElementById("standardlinks"); 
		var option = document.createElement("option");
		option.text = object[i].name;
		option.value=object[i].link;
		select.add(option);
	}
}
	
$(function(ready){
$( ".links" ).change(function() {
    var link=document.getElementById("standardlinks").value;
	//if(link="Math Core Standard"){
    $("#link").attr("href",link);	
	//}
	});
		
  
});


	
		
	