function cal(){
    document.getElementById("100dt").innerHTML = ("$" + document.getElementById("100da").value * 100);      var tot = document.getElementById("100da").value * 100;
    document.getElementById("50dt").innerHTML = ("$" + document.getElementById("50da").value * 50);         tot = tot + (document.getElementById("50da").value * 50);
    document.getElementById("20dt").innerHTML = ("$" + document.getElementById("20da").value * 20);         tot = tot + (document.getElementById("20da").value * 20);
    document.getElementById("10dt").innerHTML = ("$" + document.getElementById("10da").value * 10);         tot = tot + (document.getElementById("10da").value * 10);
    document.getElementById("5dt").innerHTML = ("$" + document.getElementById("5da").value * 5);            tot = tot + (document.getElementById("5da").value * 5);
    document.getElementById("1dt").innerHTML = ("$" + document.getElementById("1da").value * 1);            tot = tot + (document.getElementById("1da").value * 1);
    document.getElementById("25ct").innerHTML = ("$" + (document.getElementById("25ca").value * 25)/100);   var ctot = (document.getElementById("25ca").value * 25);
    document.getElementById("10ct").innerHTML = ("$" + (document.getElementById("10ca").value * 10)/100);   ctot = ctot + (document.getElementById("10ca").value * 10);
    document.getElementById("5ct").innerHTML = ("$" + (document.getElementById("5ca").value * 5)/100);      ctot = ctot + (document.getElementById("5ca").value * 5);
    document.getElementById("1ct").innerHTML = ("$" + (document.getElementById("1ca").value * 1)/100);      ctot = ctot + (document.getElementById("1ca").value * 1);
    document.getElementById("25rt").innerHTML = ("$" + document.getElementById("25ra").value * 10);         tot = tot + (document.getElementById("25ra").value * 10);
    document.getElementById("10rt").innerHTML = ("$" + document.getElementById("10ra").value * 5);          tot = tot + (document.getElementById("10ra").value * 5);
    document.getElementById("5rt").innerHTML = ("$" + document.getElementById("5ra").value * 2);            tot = tot + (document.getElementById("5ra").value * 2);
    document.getElementById("1rt").innerHTML = ("$" + (document.getElementById("1ra").value * 50)/100);     ctot = ctot + (document.getElementById("1ra").value * 50);
    var ftot = tot + (ctot/100);
    document.getElementById("totaled").innerHTML = ("$" + ftot);
}