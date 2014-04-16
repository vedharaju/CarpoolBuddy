function getParams(name) {
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

