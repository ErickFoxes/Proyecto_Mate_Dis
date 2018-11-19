var U, X, Y, Z, a, b, c, d, x, y, z, W;
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
        document.getElementById("Ur").value = ea - - eW;
        document.getElementById("ar").value = ea;
    } else if (eU != "" && eW != "") {
        document.getElementById("Wr").value = eW;
        document.getElementById("Ur").value = eU;
        document.getElementById("ar").value = eU - eW;
    }
}
function contar2(U, X, Y, a, b, c, W) {
    var i = 0;
    if (U != "") {
        i = i + 1;
    }
    if (X != "") {
        i = i + 1;
    }
    if (Y != "") {
        i = i + 1;
    }
    if (a != "") {
        i = i + 1;
    }
    if (b != "") {
        i = i + 1;
    }
    if (c != "") {
        i = i + 1;
    }
    if (W != "") {
        i = i + 1;
    }
    return i;
}
function contar3(U, X, Y, Z, a, b, c, d, x, y, z, W) {
    var i = 0;
    if (U != "") {
        i = i + 1;
    }
    if (X != "") {
        i = i + 1;
    }
    if (Y != "") {
        i = i + 1;
    }
    if (Z != "") {
        i = i + 1;
    }
    if (a != "") {
        i = i + 1;
    }
    if (b != "") {
        i = i + 1;
    }
    if (c != "") {
        i = i + 1;
    }
    if (d != "") {
        i = i + 1;
    }
    if (x != "") {
        i = i + 1;
    }
    if (y != "") {
        i = i + 1;
    }
    if (z != "") {
        i = i + 1;
    }
    if (W != "") {
        i = i + 1;
    }
    return i;
}
function calcularDiagrama2() {
    var eW2 = document.getElementById("W2").value;
    var eU2 = document.getElementById("U2").value;
    var eX2 = document.getElementById("X2").value;
    var eY2 = document.getElementById("Y2").value;
    var ea2 = document.getElementById("a2").value;
    var eb2 = document.getElementById("b2").value;
    var ec2 = document.getElementById("c2").value;

    var cant = contar2(eW2, eU2, eX2, eY2, ea2, eb2, ec2);
    if (cant == 5) {
        //con 5 valores
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "") {
            c = eX2 - ea2;
            W = eU2 - ea2 - eb2 - c;
            document.getElementById("Wr2").value = W;
            document.getElementById("cr2").value = c;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && ec2 != "") {
            b = eY2 - ec2;
            W = eU2 - ea2 - ec2 - b;
            document.getElementById("Wr2").value = W;
            document.getElementById("br2").value = b;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && eW2 != "") {
            c = eX2 - ea2;
            b = eY2 - c;
            document.getElementById("cr2").value = c;
            document.getElementById("br2").value = b;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && eb2 != "" && ec2 != "") {
            eW2 = eU2 - ea2 - eb2 - ec2;
            document.getElementById("Wr2").value = W;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && eb2 != "" && eW2 != "") {
            c = eY2 - eb2;
            a = eX2 - c;
            document.getElementById("cr2").value = c;
            document.getElementById("ar2").value = a;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && ec2 != "" && eW2 != "") {
            a = eX2 - ec2;
            b = eY2 - ec2;
            document.getElementById("ar2").value = a;
            document.getElementById("br2").value = b;
        }
        if (eU2 != "" && eX2 != "" && ea2 != "" && eb2 != "" && ec2 != "") {
            Y = eb2 - -ec2;
            W = eU2 - ea2 - eb2 - ec2;
            document.getElementById("Yr2").value = Y;
            document.getElementById("Wr2").value = W;
        }
        if (eU2 != "" && eX2 != "" && ea2 != "" && eb2 != "" && eW2 != "") {
            c = eX2 - ea2;
            Y = eb2 - -c;
            document.getElementById("cr2").value = c;
            document.getElementById("Yr2").value = Y;
        }
        if (eU2 != "" && eX2 != "" && ea2 != "" && ec2 != "" && eW2 != "") {
            b = eU2 - eW2 - ea2 - ec2;
            Y = ec2 - -b;
            document.getElementById("br2").value = b;
            document.getElementById("Yr2").value = Y;
        }
        if (eU2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "") {
            X = ea2 - -ec2;
            W = eU2 - ea2 - eb2 - ec2;
            document.getElementById("Xr2").value = X;
            document.getElementById("Wr2").value = W;
        }
        if (eU2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && eW2 != "") {
            c = eY2 - eb2;
            X = ea2 - -c;
            document.getElementById("cr2").value = c;
            document.getElementById("Xr2").value = X;
        }
        if (eU2 != "" && eY2 != "" && ea2 != "" && ec2 != "" && eW2 != "") {
            b = eY2 - ec2;
            X = ea2 - -ec2;
            document.getElementById("br2").value = b;
            document.getElementById("Xr2").value = X;
        }
        if (eU2 != "" && eY2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            a = eU2 - eW2 - eb2 - ec2;
            X = ec2 - -a;
            document.getElementById("ar2").value = a;
            document.getElementById("Xr2").value = X;
        }
        if (eU2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            X = ea2 - -ec2;
            Y = eb2 - -ec2;
            document.getElementById("Xr2").value = X;
            document.getElementById("Yr2").value = Y;
        }
        /*if (eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "") {
            U = ea2+eb2+ec2;
            W = U-U;
            document.getElementById("Ur2").value = U;
            document.getElementById("Wr2").value = W;
        }*/
        if (eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && eW2 != "") {
            c = eX2 - ea2;
            U = ea2 - -eb2 - -eW2 - -c;
            document.getElementById("cr2").value = c;
            document.getElementById("Ur2").value = U;
        }
        if (eX2 != "" && eY2 != "" && ea2 != "" && ec2 != "" && eW2 != "") {
            b = eY2 - ec2;
            U = ea2 - -ec2 - -eW2 - -b;
            document.getElementById("br2").value = b;
            document.getElementById("Ur2").value = U;
        }
        if (eX2 != "" && eY2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            a = eX2 - ec2;
            U = eb2 - -ec2 - -eW2 - -a;
            document.getElementById("ar2").value = a;
            document.getElementById("Ur2").value = U;
        }
        if (eX2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            Y = eb2 - -ec2;
            U = ea2 - -eb2 - -ec2 - -eW2;
            document.getElementById("Yr2").value = Y;
            document.getElementById("Ur2").value = U;
        }
        if (eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            X = ea2 - -ec2;
            U = ea2 - -eb2 - -ec2 - -eW2;
            document.getElementById("Xr2").value = X;
            document.getElementById("Ur2").value = U;
        }
    } else if (cant == 6) {
        //Con 6 Valores
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "") {
            W = eU2 - ea2 - eb2 - ec2;
            document.getElementById("Wr2").value = W;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && eW2 != "") {
            c = eX2 - ea2;
            document.getElementById("cr2").value = c;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && ea2 != "" && ec2 != "" && eW2 != "") {
            b = eY2 - ec2;
            document.getElementById("br2").value = b;
        }
        if (eU2 != "" && eX2 != "" && eY2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            a = eX2 - ec2;
            document.getElementById("ar2").value = a;
        }
        if (eU2 != "" && eX2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            Y = eb2 - -ec2;
            document.getElementById("Yr2").value = Y;
        }
        if (eU2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            X = ea2 - -ec2;
            document.getElementById("Xr2").value = X;
        }
        if (eX2 != "" && eY2 != "" && ea2 != "" && eb2 != "" && ec2 != "" && eW2 != "") {
            U = ea2 - -eb2 - -ec2 - -eW2;
            document.getElementById("Ur2").value = U;
        }
    }
}

function calcularDiagrama3() {
    var eW3 = document.getElementById("W3").value;
    var eU3 = document.getElementById("U3").value;
    var eX3 = document.getElementById("X3").value;
    var eY3 = document.getElementById("Y3").value;
    var eZ3 = document.getElementById("Z3").value;
    var ea3 = document.getElementById("a3").value;
    var eb3 = document.getElementById("b3").value;
    var ec3 = document.getElementById("c3").value;
    var ed3 = document.getElementById("d3").value;
    var ex3 = document.getElementById("x3").value;
    var ey3 = document.getElementById("y3").value;
    var ez3 = document.getElementById("z3").value;

    var cant3 = contar3(eW3, eU3, eX3, eY3, eZ3, ea3, eb3, ec3, ed3, ex3, ey3, ez3);
    //eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != ""
    if (cant3 == 10) {
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "") {
            z = eZ3 - ea3 - ed3 - ec3;
            W = eU3 - ex3 - ey3 - z - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Wr3").value = W;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "") {
            y = eY3 - eb3 - ec3 - ed3;
            W = eU3 - ex3 - y - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Wr3").value = W;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && eW3 != "") {
            y = eY3 - eb3 - ec3 - ed3;
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("zr3").value = z;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            W = eU3 - x - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("xr3").value = x;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ey3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("zr3").value = z;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ez3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            y = eY3 - eb3 - ec3 - ed3;
            document.getElementById("xr3").value = x;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            d = eY3 - eb3 - ec3 - ey3;
            W = eU3 - x - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("dr3").value = d;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            d = eY3 - eb3 - ec3 - ey3;
            z = eZ3 - ea3 - ec3 - d;
            document.getElementById("dr3").value = d;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            d = eZ3 - ea3 - ec3 - ez3;
            y = eY3 - eb3 - ec3 - d;
            document.getElementById("dr3").value = d;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eY3 - eb3 - ec3 - ey3;
            x = eX3 - ea3 - eb3 - ec3;
            document.getElementById("dr3").value = d;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            c = eY3 - eb3 - ed3 - ey3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - c - ed3;
            document.getElementById("cr3").value = c;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            c = eY3 - eb3 - ed3 - ey3;
            z = eZ3 - ea3 - c - ed3;
            document.getElementById("cr3").value = c;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            y = eY3 - eb3 - c - ed3;
            document.getElementById("cr3").value = c;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ed3 != "" && ez3 != "" && ey3 != "" && eW3 != "") {
            c = eY3 - eb3 - ed3 - ey3;
            x = eX3 - ea3 - eb3 - c;
            document.getElementById("cr3").value = c;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ex3 != "" && ez3 != "" && ey3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            d = eY3 - eb3 - c - ey3;
            document.getElementById("cr3").value = c;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ed3 != "" && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - b - ec3 - ed3;
            document.getElementById("br3").value = b;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ed3 != "" && ec3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("br3").value = b;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ed3 != "" && ec3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            y = eY3 - b - ec3 - ed3;
            document.getElementById("br3").value = b;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ed3 != "" && ec3 != "" && ez3 != "" && ey3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            x = eX3 - ea3 - b - ec3;
            document.getElementById("br3").value = b;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ex3 != "" && ec3 != "" && ez3 != "" && ey3 != "" && eW3 != "") {
            b = eX3 - ea3 - ec3 - ex3;
            d = eY3 - b - ec3 - ey3;
            document.getElementById("br3").value = b;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ex3 != "" && ed3 != "" && ez3 != "" && ey3 != "" && eW3 != "") {
            c = eZ3 - ea3 - ed3 - ez3;
            b = eX3 - ea3 - c - ex3;
            document.getElementById("br3").value = b;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            W = eU3 - ex3 - ey3 - ez3 - a - eb3 - ec3 - ed3;
            document.getElementById("ar3").value = a;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            z = eZ3 - a - ec3 - ed3;
            document.getElementById("ar3").value = a;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            y = eY3 - eb3 - ec3 - ed3;
            document.getElementById("ar3").value = a;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eZ3 - ed3 - ec3 - ez3;
            x = eX3 - a - eb3 - ec3;
            document.getElementById("ar3").value = a;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eZ3 - ed3 - ec3 - ez3;
            d = eY3 - eb3 - ec3 - ey3;
            document.getElementById("ar3").value = a;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eY3 - eb3 - ed3 - ey3;
            a = eZ3 - ed3 - c - ez3;
            document.getElementById("ar3").value = a;
            document.getElementById("cr3").value = c;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eZ3 - ed3 - ec3 - ez3;
            b = eX3 - a - ec3 - ex3;
            document.getElementById("ar3").value = a;
            document.getElementById("br3").value = b;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            Z = ea3 - -ec3 - -ed3 - -ez3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            z = eU3 - ex3 - ey3 - ea3 - eb3 - ec3 - ed3 - eW3;
            Z = ea3 - -ec3 - -ed3 - -z;
            document.getElementById("Zr3").value = Z;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            y = eY3 - eb3 - ec3 - ed3;
            Z = ea3 - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            Z = ea3 - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eY3 - eb3 - ec3 - ey3;
            Z = ea3 - -ec3 - -d - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            Z = ea3 - -c - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("cr3").value = c;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eX3 - ea3 - ec3 - ex3;
            Z = ea3 - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("br3").value = b;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eX3 - ea3 - ec3 - ex3;
            Z = ea3 - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("br3").value = b;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            Z = a - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("ar3").value = a;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            Y = eb3 - -ec3 - -ed3 - -ey3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            Y = eb3 - -ec3 - -ed3 - -ey3;
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            y = eU3 - ex3 - ez3 - ea3 - eb3 - ec3 - ed3 - eW3;
            Y = eb3 - -ec3 - -ed3 - -y;
            document.getElementById("Yr3").value = Y;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            Y = eb3 - -ec3 - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eZ3 - ea3 - ec3 - ez3;
            Y = eb3 - -ec3 - -d - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            Y = eb3 - -c - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("cr3").value = c;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eX3 - ea3 - ec3 - ex3;
            Y = b - -ec3 - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("br3").value = b;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            Y = eb3 - -ec3 - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("ar3").value = a;
        }
        if (eU3 != "" && eX3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Z = ea3 - -ec3 - -ed3 - -ez3;
            Y = eb3 - -ec3 - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("Zr3").value = Z;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            X = ea3 - -ec3 - -eb3 - -ex3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Wr3").value = W;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            X = ea3 - -ec3 - -eb3 - -ex3;
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("zr3").value = z;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            X = ea3 - -ec3 - -eb3 - -ex3;
            y = eY3 - eb3 - ec3 - ed3;
            document.getElementById("yr3").value = y;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            x = eU3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3 - eW3;
            X = ea3 - -ec3 - -eb3 - -x;
            document.getElementById("xr3").value = x;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eZ3 - ea3 - ec3 - ez3;
            X = ea3 - -ec3 - -eb3 - -ex3;
            document.getElementById("dr3").value = d;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            X = ea3 - -c - -eb3 - -ex3;
            document.getElementById("cr3").value = c;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            X = ea3 - -ec3 - -b - -ex3;
            document.getElementById("br3").value = b;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eZ3 - ed3 - ec3 - ez3;
            X = a - -ec3 - -eb3 - -ex3;
            document.getElementById("ar3").value = a;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eY3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Z = ea3 - -ec3 - -ed3 - -ez3;
            X = ea3 - -ec3 - -eb3 - -ex3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("Xr3").value = X;
        }
        if (eU3 != "" && eX3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Y = eb3 - -ec3 - -ed3 - -ey3;
            X = ea3 - -ec3 - -eb3 - -ex3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("Xr3").value = X;
        }
        /*if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            U = ex3- -ey3- -ez3- -ea3- -eb3- -ec3- -ed3- -eW3;
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Wr3").value = W;
            document.getElementById("Ur3").value = U;
        }*/
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            z = eZ3 - ea3 - ec3 - ed3;
            U = ex3 - -ey3 - -z - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("zr3").value = z;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            y = eY3 - eb3 - ec3 - ed3;
            U = ex3 - -y - -ez3 - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("yr3").value = y;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            U = x - -ey3 - -ez3 - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("xr3").value = x;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eZ3 - ea3 - ec3 - ez3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -eb3 - -ec3 - -d - -eW3;
            document.getElementById("dr3").value = d;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -eb3 - -c - -ed3 - -eW3;
            document.getElementById("cr3").value = c;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -b - -ec3 - -ed3 - -eW3;
            document.getElementById("br3").value = b;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            U = ex3 - -ey3 - -ez3 - -a - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("ar3").value = a;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eY3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Z = ea3 - -ec3 - -ed3 - -ez3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("Zr3").value = Z;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eZ3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Y = eb3 - -ec3 - -ed3 - -ey3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("Yr3").value = Y;
            document.getElementById("Ur3").value = U;
        }
        if (eU3 != "" && eZ3 != "" && ea3 != "" && eb3 != "" && ec3 != ""
            && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            X = ea3 - -ec3 - -eb3 - -ex3;
            U = ex3 - -ey3 - -ez3 - -ea3 - -eb3 - -ec3 - -ed3 - -eW3;
            document.getElementById("Xr3").value = X;
            document.getElementById("Ur3").value = U;
        }

    } else if (cant3 == 11) {
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "") {
            W = eU3 - ex3 - ey3 - ez3 - ea3 - eb3 - ec3 - ed3;
            document.getElementById("Wr3").value = W;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && eW3 != "") {
            z = eZ3 - ea3 - ec3 - ed3;
            document.getElementById("zr3").value = z;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ex3 != "" && ez3 != "" && eW3 != "") {
            y = eY3 - eb3 - ec3 - ed3;
            document.getElementById("yr3").value = y;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ed3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            x = eX3 - ea3 - eb3 - ec3;
            document.getElementById("xr3").value = x;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ec3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            d = eZ3 - ea3 - ec3 - ez3;
            document.getElementById("dr3").value = d;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && eb3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            c = eX3 - ea3 - eb3 - ex3;
            document.getElementById("cr3").value = c;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            b = eY3 - ed3 - ec3 - ey3;
            document.getElementById("br3").value = b;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && eZ3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            a = eX3 - eb3 - ec3 - ex3;
            document.getElementById("ar3").value = a;
        }
        if (eU3 != "" && eX3 != "" && eY3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Z = ea3 - -ec3 - -ed3 - -ez3;
            document.getElementById("Zr3").value = Z;
        }
        if (eU3 != "" && eX3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            Y = eb3 - -ec3 - -ed3 - -ey3;
            document.getElementById("Yr3").value = Y;
        }
        if (eU3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
            && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
            X = ea3 - -ec3 - -eb3 - -ex3;
            document.getElementById("Xr3").value = X;
        }
        if (eX3 != "" && eY3 != "" && eZ3 != "" && ea3 != "" && eb3 != ""
        && ec3 != "" && ed3 != "" && ex3 != "" && ey3 != "" && ez3 != "" && eW3 != "") {
        U = ex3- -ey3- -ez3- -ea3- -eb3- -ec3- -ed3- -eW3;
        document.getElementById("Ur3").value = U;
    }
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
