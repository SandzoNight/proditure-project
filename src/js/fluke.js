var mydiv = document.getElementById("product1");
function viewFlukeProduct(){
    flukeShowProductName();
}

function flukeShowProductName(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            myproduct = this.responseXML.getElementsByTagName("item")[0];
            mydiv.getElementsByClassName("product-name")[0].innerHTML = myproduct.getElementsByTagName("name")[0].childNodes[0].nodeValue+"<hr>";
        }
    }
    xhttp.open("GET","src/products.xml?"+Math.random(),true);
    xhttp.send();
}

function getFlukeProductDesc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            myproduct = this.responseXML.getElementsByTagName("item")[0];
            var desc = myproduct.getElementsByTagName("desc")[0].childNodes[0].nodeValue;
            mydiv.getElementsByClassName("product-info")[0].innerHTML = "<p style='font-size:18px'>"+desc+"</p>";
        }
    }
    xhttp.open("GET","src/products.xml?"+Math.random(),true);
    xhttp.send();
}

function getFlukeProductPrice(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            myproduct = this.responseXML.getElementsByTagName("item")[0];
            var price = myproduct.getElementsByTagName("price")[0].childNodes[0].nodeValue;
            mydiv.getElementsByClassName("product-info")[0].innerHTML = "<p style='font-size:18px'>ราคา: "+price+" บาท</p>";
        }
    }
    xhttp.open("GET","src/products.xml?"+Math.random(),true);
    xhttp.send();
}

function getFlukeImgList(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                    console.log("if")
                    myproduct = this.responseXML.getElementsByTagName("item")[0];
                    var url1 = myproduct.getElementsByTagName("img1")[0].childNodes[0].nodeValue;
                    var url2 = myproduct.getElementsByTagName("img2")[0].childNodes[0].nodeValue;
                    document.getElementById("product1-img1").src = url1;
                    document.getElementById("product1-img2").src = url2;
            }
        }
        xhttp.open("GET","src/products.xml?"+Math.random(),true);
        xhttp.send();
}