function getCheckIns(){
			var number=$('#interval').combobox('getValue');
			
			var table = document.getElementById("myTable");
			
			for(i=0;i<number;i++){
				var row=table.insertRow(1);
				
				var cell1=row.insertCell(0);
				var cell2=row.insertCell(1);
				
				cell1.innerHTML="Describe the check in";
				//var input=document.createElement('input');
				//input.type="text";
				
				//cell2.append(input);
			}
		}