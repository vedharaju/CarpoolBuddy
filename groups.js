$(".existing_group_btn").click(function(){
	 		window.location.href = "map-search.html";
	 	})

var params = getParams()

if (params['bool'] == "true"){
	// make the table visible
	$(".request_table").visibility = "visible";
	// adds a row to the table. the negative one means it will add it to the end of the table
	var row  = $(".request_table").insertRow(-1);
	row.insertCell(params['name']);
	row.insertCell(CURRENT_TIME);
	row.insertCell("pending");
	row.insertCell(BUTTON);
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

