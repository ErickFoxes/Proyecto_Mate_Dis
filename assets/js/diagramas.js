function calcularDiagrama1(){
    var eU = document.getElementById("U").value;
    var ea = document.getElementById("a").value;
    var eW = document.getElementById("W").value;
    if(eU!="" && ea!=""){
        document.getElementById("Wr").value=eU-ea;
        document.getElementById("Ur").value=eU;
        document.getElementById("ar").value=ea;
    }else if(eW!="" && ea!=""){
        document.getElementById("Wr").value=eW;
        document.getElementById("Ur").value=ea+eW;
        document.getElementById("ar").value=eU;
    }else if(eU!="" && eW!=""){
        document.getElementById("Wr").value=eW;
        document.getElementById("Ur").value=eU;
        document.getElementById("ar").value=eU-eW;
    }
}
function borrar1(){
    document.getElementById("Wr").value="";
    document.getElementById("Ur").value="";
    document.getElementById("ar").value="";
    document.getElementById("W").value="";
    document.getElementById("U").value="";
    document.getElementById("a").value="";
}
