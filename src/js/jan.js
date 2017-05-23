
function viewJanProduct(){
    // document.getElementById("product2").getElementsByClassName("modal-content")[0].innerHTML= "นอร์แนส";
    connectXMLbyJan();
}

function connectXMLbyJan(){
    console.log("Jan  Connection");
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var myItem = this.responseXML.getElementsByTagName("item")[1];
            document.getElementById("product2-name").innerHTML = myItem.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            document.getElementById("product2-desc").innerHTML = myItem.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            document.getElementById("product2-img1").src = myItem.getElementsByTagName("img1")[0].childNodes[0].nodeValue;
            document.getElementById("product2-img2").src = myItem.getElementsByTagName("img2")[0].childNodes[0].nodeValue;
        }
    }
    xml.open("GET","src/products.xml?"+Math.random(),true);
    xml.send();

}