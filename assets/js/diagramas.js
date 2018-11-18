var U,X,Y,Z,a,b,c,d,x,y,z,W;
function calcularDiagrama1() {
    var eU = document.getElementById("U").value;
    var ea = document.getElementById("a").value;
    var eW = document.getElementById("W").value;
    if (eU != "" && ea != "") {
        document.getElementById("Wr").value = eU - ea;
        document.getElementById("Ur").value = eU;
        document.getElementById("ar").value = ea;
    } else if (eW != "" && ea != "") {
        document.getElementById("Wr").value = eW;
        document.getElementById("Ur").value = ea + eW;
        document.getElementById("ar").value = eU;
    } else if (eU != "" && eW != "") {
        document.getElementById("Wr").value = eW;
        document.getElementById("Ur").value = eU;
        document.getElementById("ar").value = eU - eW;
    }
}
function calcularDiagrama2() {
    var eW2 = document.getElementById("W2").value;
    var eU2 = document.getElementById("U2").value;
    var eX2 = document.getElementById("X2").value;
    var eY2 = document.getElementById("Y2").value;
    var ea2 = document.getElementById("a2").value;
    var eb2 = document.getElementById("b2").value;
    var ec2 = document.getElementById("c2").value;

    if (eU2 != "" && eX2 != "" && eY2 !="" && ea2!="" && eb2!="") {
        c =eX2-ea2;
        W = eU2-ea2-eb2-c;
        document.getElementById("Wr2").value = W;
        document.getElementById("cr2").value = c;
    }
    if (eU2 != "" && eX2 != "" && eY2 !="" && ea2!="" && ec2!="") {
        b =eY2-ec2;
        W = eU2-ea2-ec2-b;
        document.getElementById("Wr2").value = W;
        document.getElementById("br2").value = b;
    }
    if (eU2 != "" && eX2 != "" && eY2 !="" && ea2!="" && eW2!="") {
        c = eX2-ea2;
        b =eY2-c;
        document.getElementById("cr2").value = c;
        document.getElementById("br2").value = b;
    }
}
function borrar1() {
    document.getElementById("Wr").value = "";
    document.getElementById("Ur").value = "";
    document.getElementById("ar").value = "";
    document.getElementById("W").value = "";
    document.getElementById("U").value = "";
    document.getElementById("a").value = "";
}
function borrar2() {
    document.getElementById("Wr2").value = "";
    document.getElementById("Ur2").value = "";
    document.getElementById("Xr2").value = "";
    document.getElementById("Yr2").value = "";
    document.getElementById("ar2").value = "";
    document.getElementById("br2").value = "";
    document.getElementById("cr2").value = "";
    document.getElementById("W2").value = "";
    document.getElementById("U2").value = "";
    document.getElementById("X2").value = "";
    document.getElementById("Y2").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("c2").value = "";
}

function borrar3() {
    document.getElementById("Wr3").value = "";
    document.getElementById("Ur3").value = "";
    document.getElementById("Xr3").value = "";
    document.getElementById("Yr3").value = "";
    document.getElementById("Zr3").value = "";
    document.getElementById("ar3").value = "";
    document.getElementById("br3").value = "";
    document.getElementById("cr3").value = "";
    document.getElementById("dr3").value = "";
    document.getElementById("xr3").value = "";
    document.getElementById("yr3").value = "";
    document.getElementById("zr3").value = "";
    document.getElementById("W3").value = "";
    document.getElementById("U3").value = "";
    document.getElementById("X3").value = "";
    document.getElementById("Y3").value = "";
    document.getElementById("Z3").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("c3").value = "";
    document.getElementById("d3").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
    document.getElementById("z3").value = "";

}
