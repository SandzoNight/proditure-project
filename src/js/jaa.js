
function viewJaaProduct(){
    // document.getElementById("product2").getElementsByClassName("modal-content")[0].innerHTML= "นอร์แนส";
    connectXMLbyJaa();
    console.log("Jaa 1");
}

function connectXMLbyJaa(){
    var xml = new XMLHttpRequest();
    console.log("Jaa 2");
    xml.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var myItem = this.responseXML.getElementsByTagName("item")[5];
            console.log(myItem);
            document.getElementById("product5-name").innerHTML = myItem.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            document.getElementById("product5-desc").innerHTML = myItem.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            document.getElementById("product5-img1").src = myItem.getElementsByTagName("img1")[0].childNodes[0].nodeValue;
            document.getElementById("product5-img2").src = myItem.getElementsByTagName("img2")[0].childNodes[0].nodeValue;
            document.getElementById("product5-price").innerHTML = myItem.getElementsByTagName("price")[0].childNodes[0].nodeValue;
        }
    }
    xml.open("GET","src/products.xml?"+Math.random(),true);
    xml.send();
}