var mlinks=[
              {"name":"Math Common Core","link":"http://www.corestandards.org/Math/Practice/"},
			  {"name":"Achieve the core","link":"http://achievethecore.org/"},
			   {"name":"Dynamic learning maps-Mathematics","link":"http://dynamiclearningmaps.org/sites/default/files/documents/Math_EEs/DLM%20Essential%20Elements%20Math%20%282013%29%20v4.pdf"},
			   {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var hlinks=[
              {"name":"National Center for History in the Schools/UCLA","link":"http://www.nchs.ucla.edu/history-standards/historical-thinking-standards"},
			  {"name":"C3 Framework for Social Studies","link":"http://www.socialstudies.org/system/files/c3/C3-Framework-for-Social-Studies.pdf"},
			  {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"},
			  {"name":"History/Social Studies Common Core","link":"http://www.corestandards.org/ELA-Literacy/RH/6-8/"}
];

var slinks=[
              {"name":"NGSS","link":"http://www.nextgenscience.org/next-generation-science-standards"},
			  {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var lalinks=[
              {"name":"Dynamic learning links","link":"http://dynamiclearningmaps.org/sites/default/files/documents/ELA_EEs/DLM%20E"},
			   {"name":"Reading Common Core","link":"http://www.corestandards.org/ELA-Literacy/RL/9-10/"},
			   {"name":"Language Arts Common Core","link":"http://www.corestandards.org/ELA-Literacy/introduction/key-design-consideration/"},
			   {"name":"Writing Common Core","link":"http://www.corestandards.org/ELA-Literacy/WHST/6-8/"},
			   {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"}
];

var alinks=[
              {"name":"National Arts Standards","link":"http://www.nationalartsstandards.org"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/"},
			  {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"National Association for Music Education","link":"http://www.nafme.org/my-classroom/standards/"}
];
var pelinks=[
              {"name":"National PE Standards, dev. by Shape ","link":"http://www.shapeamerica.org/standards/pe/index.cfm"},
			  {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/pdh/standards.htm#goals"}
			  
];


var liblinks=[
	{"name":"Library Standards","link":"https://www.islma.org/ISAIL.htm"}
];

var fllinks=[
	{"name":"American Council on the Teaching of Foreign Language","link":"http://www.actfl.org/about-the-american-council-the-teaching-foreign-languages/resources"}
];


var allinks=[
	{"name":"Math Common Core","link":"http://www.corestandards.org/Math/Practice/"},
			  {"name":"Achieve the core","link":"http://achievethecore.org/"},
			  {"name":"American Council on the Teaching of Foreign Language","link":"http://www.actfl.org/about-the-american-council-the-teaching-foreign-languages/resources"},
			  {"name":"Dynamic learning maps-Mathematics","link":"http://dynamiclearningmaps.org/sites/default/files/documents/Math_EEs/DLM%20Essential%20Elements%20Math%20%282013%29%20v4.pdf"},
              {"name":"National Center for History in the Schools/UCLA","link":"http://www.nchs.ucla.edu/history-standards/historical-thinking-standards"},
			  {"name":"C3 Framework for Social Studies","link":"http://www.socialstudies.org/system/files/c3/C3-Framework-for-Social-Studies.pdf"},
			  {"name":"History/Social Studies Common Core","link":"http://www.corestandards.org/ELA-Literacy/RH/6-8/"},
			  {"name":"NGSS","link":"http://www.nextgenscience.org/next-generation-science-standards"},
			  {"name":"Dynamic learning links","link":"http://dynamiclearningmaps.org/sites/default/files/documents/ELA_EEs/DLM%20E"},
			   {"name":"Reading Common Core","link":"http://www.corestandards.org/ELA-Literacy/RL/9-10/"},
			   {"name":"Language Arts Common Core","link":"http://www.corestandards.org/ELA-Literacy/introduction/key-design-consideration/"},
			   {"name":"Writing Common Core","link":"http://www.corestandards.org/ELA-Literacy/WHST/6-8/"},
			   {"name":"National Arts Standards","link":"http://www.nationalartsstandards.org"},
			   {"name":"National Association for Music Education","link":"http://www.nafme.org/my-classroom/standards/"},
			   {"name":"National PE Standards, dev. by Shape ","link":"http://www.shapeamerica.org/standards/pe/index.cfm"},
			    {"name":"National Board for Professional Teaching Standards","link":"http://boardcertifiedteachers.org/certificate-areas"},
			  {"name":"Illinois State Standards","link":"http://www.isbe.net/ils/pdh/standards.htm#goals"}
];
			   

function getStandardsLinks(){
	var subject=$("#subject").val();
	
	

	if(subject=="Math"){
	
		createList(mlinks);
	}
	if(subject=="History"||subject=="SS"){
	
		createList(hlinks);
	}
	if(subject=="FL"){
	
		createList(fllinks);
	}
	if(subject=="Science"||subject=="LScience"||subject=="PScience"){
	
		createList(slinks);
	}
	if(subject=="LA"){
	
		createList(lalinks);
	}
	if(subject=="Art"||subject=="PArt"){
		createList(alinks);
		}
	if(subject=="PE"||subject=="HPE"){
		createList(pelinks);
		}
	if(subject=="Library"){
		createList(liblinks);
		}
	if(subject=="GE"||subject=="sE"||subject=="VP"){
		createList(allinks);
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
	var length=select.length;
	
	for(i=0;i<=length;i++){
		select.remove(1);
		
	}
	

	for(i=0;i<object.length;i++){
		//var select = document.getElementById("standardlinks"); 
		var option = document.createElement("option");
		option.text = object[i].name;
		option.value=object[i].link;
		select.add(option);
	}
}

$(document).ready(function(){
	createList(allinks);
	});
	
$(function(ready){
$( ".links" ).change(function() {
    var link=document.getElementById("standardlinks").value;
	//if(link="Math Core Standard"){
    $("#link").attr("href",link);	
	//}
	});
		
  
});


	
		
	