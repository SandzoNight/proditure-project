function viewJamProduct(){
	// document.getElementById("product4").getElementsByClassName("modal-content")[0].innerHTML="REGISSÖR";
	viewlist();
	console.log("Jam 1");
}
function viewlist(){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    	console.log("Jam 2");
        if(xhttp.readyState==4 && xhttp.status==200){
        	console.log("Jam 3");
        	console.log(this.responseXML);
            var myItem = this.responseXML.getElementsByTagName("item")[4];
            console.log(myItem);
            document.getElementById("product4-name").innerHTML = myItem.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            document.getElementById("product4-desc").innerHTML = myItem.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            document.getElementById("product4-img1").src = myItem.getElementsByTagName("img1")[0].childNodes[0].nodeValue;
            document.getElementById("product4-img2").src = myItem.getElementsByTagName("img2")[0].childNodes[0].nodeValue;
        }
    }
    xhttp.open("GET","src/products.xml?"+Math.random(),true);
    xhttp.send();
}