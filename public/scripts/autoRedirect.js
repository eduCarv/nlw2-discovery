function autoRedirect() {

    var loc = location.search.substring(1, location.search.length);       
    var params = loc.split("?"); 

    var queryString = "location.href='/study?" + params.toString() + "'" 
    
    console.log(queryString)
    console.log(params.toString())

    window.setTimeout(queryString, 2000);
}

autoRedirect();