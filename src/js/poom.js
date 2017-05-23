function viewPoomProduct(){
    // mydiv.getElementsByClassName("modal-content")[0].innerHTML = "";
    document.getElementById("product3-name").innerHTML = "Hektar";
    GetHektarImage();
    console.log("running viewPoomProduct");
}

function GetHektarImage(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("product3-name").innerHTML = this.responseXML.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        }
    }
    xhttp.open("GET","src/products.xml",true);
    xhttp.send();
}