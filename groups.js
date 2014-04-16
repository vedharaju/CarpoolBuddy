$(".existing_group_btn").click(function(){
	 		window.location.href = "map-search.html";
	 	})

var params = getParams()

if (params['bool'] == "true"){
	// make the table visible
	$(".request_table").css("visibility", "visible");

// date from: http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;

	var rowHtml =  "<tr>" +
				   "<td class='bordered_cell'>" +  params['name'].replace("-", " ") + "</td>" +
				   "<td class='bordered_cell'>" + today + "</td>" +
				   "<td class='bordered_cell'>Pending</td>" +
				   "<td class='unbordered_cell'><button type='button' class='btn btn-danger btn-large cancel_request_btn'>Cancel Request</button></td>" +
				   "</tr>";
	// adds a row to the table. the negative one means it will add it to the end of the table
	$(".request_table > tbody:last").append(rowHtml);
} 

function getParams() {
	var params = {}; 
	var parts = (window.location.search || '').split(/[&?]/); 
	for (var i = 0; i < parts.length; i++) { 
	 var eq = parts[i].indexOf('='); 
	 if (eq < 0) continue; 
	 params[decodeURIComponent(parts[i].substring(0, eq))] 
	 = decodeURIComponent(parts[i].substring(eq+1)); 
	}
	return params
}

