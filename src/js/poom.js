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
            var myItem = this.responseXML.getElementsByTagName("item")[2];
            document.getElementById("product3-name").innerHTML = myItem.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            document.getElementById("product3-desc").innerHTML = myItem.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            document.getElementById("product3-img1").src = myItem.getElementsByTagName("img1")[0].childNodes[0].nodeValue;
            document.getElementById("product3-img2").src = myItem.getElementsByTagName("img2")[0].childNodes[0].nodeValue;
            /*document.getElementById("product3-img").innerHTML = '<img src="'+myItem.getElementsByTagName("img2")[0].childNodes[0].nodeValue+'" width=220px height=220px">'+
            '<img src="'+myItem.getElementsByTagName("img1")[0].childNodes[0].nodeValue+'" width=220px height=220px">';*/

        }
    }
    xhttp.open("GET","src/products.xml",true);
    xhttp.send();
}