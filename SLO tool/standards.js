var mlinks=[
              {"name":"Math Common Core","link":"http://www.corestandards.org/Math/Content/2/introduction/"},
			  {"name":"Achieve the core","link":"http://achievethecore.org/"},
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

var lalinks=[
              {"name":"Dynamic learning links","link":"http://dynamiclearningmaps.org/sites/default/files/documents/ELA_EEs/DLM%20E"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var alinks=[
              {"name":"National Arts Standards","link":"http://www.nationalartsstandards.org"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var commonlinks=[
	{"name":"Achieve the core","link":"http://achievethecore.org/"},
	{"name":"Common Core","link":"http://www.corestandards.org/"},
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
	if(subject=="Language Arts"){
	
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
    
    var select = document.getElementById("standardlinks"); 
	
	for(i=0;i<=select.length;i++){
		select.remove(1);
		
	}
	

	for(i=0;i<object.length;i++){select
		//var select = document.getElementById("standardlinks"); 
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


	
		
	