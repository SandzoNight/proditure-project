var mydiv = document.getElementById("product1");
function viewFlukeProduct(){
    // mydiv.getElementsByClassName("modal-content")[0].innerHTML = "";
    mydiv.getElementsByClassName("product-name")[0].innerHTML = "LIXHULT<hr>";
    flukeGetImage();
}

function flukeGetImage(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            mydiv.getElementsByClassName("product-desc")[0].innerHTML = this.responseXML.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        }
    }
    xhttp.open("GET","src/products.xml",true);
    xhttp.send();
}