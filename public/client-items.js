function filter() {
    //hold query parameters
    let queryObj = {};

    //get data 
    let name = document.getElementById("name").value;
    let minp = document.getElementById("minp").value;
    let maxp = document.getElementById("maxp").value;
    let minq = document.getElementById("minq").value;
    let maxq = document.getElementById("maxq").value;

    //check for input errors
    if (name != "") {
        queryObj.name = name;
    }
    if (minp != "") {
        if (isNaN(minp) || Number(minp) < 0) {
            alert("Please enter a minimum price greater than or equal to 0.");
            return;
        } else {
            queryObj.minp = minp;   
        }
    }
    if (maxp != "") {
        if (isNaN(maxp) || Number(maxp) < 0) {
            alert("Please enter a maximum price greater than or equal to 0.");
            return;
        } else {
            queryObj.maxp = maxp;       
        }
    }
    if (minq != "") {
        if (isNaN(minq) || !Number.isInteger(Number(minq)) || Number(minq) < 0) {
            alert("Please enter a minimum quantity integer greater than or equal to 0.");
            return;
        } else {
            queryObj.minq = minq;
        }
    }
    if (maxq != "") {
        if (isNaN(maxq) || !Number.isInteger(Number(maxq)) || Number(maxq) < 0) {
            alert("Please enter a maximum quantity  integer greater than or equal to 0.");
            return;
        } else {
            queryObj.maxq = maxq;
        }
    }
    

    //make query string
    let queryStr = "";
    queryStr = Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&');
    

	//send request
	let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
            window.location.href = '/items?' + queryStr;
		}
	}
    req.open("GET", "/items?" + queryStr);
	req.setRequestHeader("Content-Type", "application/json");
    req.send();
}