function add(){
	//create new item object
	let newItem = {};
	newItem.name = document.getElementById("name").value;
	newItem.price = Number(document.getElementById("price").value);
    newItem.quantity = Number(document.getElementById("quantity").value);
    
    //check if valid data
    if (newItem.name == "" || isNaN(newItem.price) || !Number.isInteger(newItem.quantity)) {
        alert("Cannot add!");
        return;
    }

	//send new item to server
	let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//if response is empty, alert user
			if(this.responseText == ""){
				alert("Incorrect fields!");
				document.getElementById("name").value = "";
				document.getElementById("price").value = "";
				document.getElementById("quantity").value = "";
				return;
			}
			//if adding was successful, redirect to page
			let data = JSON.parse(this.responseText);
			window.location.href = '/items/'+data.id;
		}
	}
	req.open("POST", "/items");
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(newItem));
}