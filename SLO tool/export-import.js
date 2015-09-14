function exp(){
	
	var year=document.getElementById("acYear").innerHTML;
	var  name=document.getElementById("edName").innerHTML;
	var district=document.getElementById("selDistrict").innerHTML;
	var school=document.getElementById("selSchool").innerHTML;
	var subject=document.getElementById("selSub").innerHTML;
	var course=document.getElementById("selCor").innerHTML;
	var grade=document.getElementById("selGra").innerHTML;
	var interval=document.getElementById("selInt").innerHTML;
	var lgoal=document.getElementById("lg").innerHTML;
	var standardlink=$('#standardlinks :selected').text();
	var standard=document.getElementById("selStan").innerHTML;
	var pop=document.getElementById("selPop").innerHTML;
	var met=document.getElementById("selMet").innerHTML;
	var assess=document.getElementById("a").innerHTML;
	var assess1=document.getElementById("a1").innerHTML;
	var assess2=document.getElementById("a2").innerHTML;
	var assess3=document.getElementById("a3").innerHTML;
	var g1=document.getElementById("g1").innerHTML;
	var g2=document.getElementById("g2").innerHTML;
	var g3=document.getElementById("g3").innerHTML;
	var g4=document.getElementById("g4").innerHTML;
	var e1=document.getElementById("e1").innerHTML;
	var e2=document.getElementById("e2").innerHTML;
	var r1=document.getElementById("r1").innerHTML;
	var r2=document.getElementById("r2").innerHTML;
	var r3=document.getElementById("r3").innerHTML;
	var r4=document.getElementById("r4").innerHTML;
	var total=$("#total").val();
	var achieved=$("#achieved").val();
	var sd=document.getElementById("sd").innerHTML;
	var ed=document.getElementById("ed").innerHTML
	/**
	var data=[year,name,district,school,subject,course,grade,interval,lgoal,standard,pop,met,asess,assess1,assess2,assess3,g1,g2,g3,g4,g5,e1,e2,r1,r2,r3,r4];
	var text = "data:text/csv;charset=utf-8,";
	data.forEach(function(infoArray, index){

    dataString = infoArray.join(",");
    text += dataString + "\n";

    }); 
	
	
	var encodedUri = encodeURI(text);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");

link.style.display = 'none';
  document.body.appendChild(link);

link.click(); // This will download the data file named "my_data.csv".

document.body.removeChild(link);
**/
var sampletext =year+"@"+name+"@"+district+"@"+school+"@"+subject+"@"+course+"@"+grade+"@"+interval+"@"+lgoal+"@"+standardlink+"@"+standard+"@"+pop+"@"+met+"@"+assess+"@"+assess1+"@"+assess2+"@"+assess3+"@"+g1+"@"+g2+"@"+g3+"@"+g4+"@"+e1
+"@"+e2+"@"+r1+"@"+r2+"@"+r3+"@"+r4+"@"+total+"@"+achieved+"@"+sd+"@"+ed;
var a = document.body.appendChild(
        document.createElement("a")
    );
a.download = "export.txt";
if(window.btoa){
a.href = "data:text/plain;base64," + btoa(sampletext);
}else{
a.href = "data:text/plain;base64," +  jQuery.base64.encode(msg.data);
}
a.click();

}