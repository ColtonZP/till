function cal(){
    document.getElementById("100dt").innerHTML = ("$" + document.getElementById("100da").value * 100);  var tot = document.getElementById("100da").value * 100;
    document.getElementById("50dt").innerHTML = ("$" + document.getElementById("50da").value * 50);     tot = tot + (document.getElementById("50da").value * 50);
    document.getElementById("20dt").innerHTML = ("$" + document.getElementById("20da").value * 20);     var tot = tot + (document.getElementById("20da").value * 20);
    document.getElementById("10dt").innerHTML = ("$" + document.getElementById("10da").value * 10);     var tot = tot + (document.getElementById("10da").value * 10);
    document.getElementById("5dt").innerHTML = ("$" + document.getElementById("5da").value * 5);        var tot = tot + (document.getElementById("5da").value * 5);
    document.getElementById("1dt").innerHTML = ("$" + document.getElementById("1da").value * 1);        var tot = tot + (document.getElementById("1da").value * 1);
    document.getElementById("25ct").innerHTML = ("$" + document.getElementById("25ca").value * .25);    var tot = tot + (document.getElementById("25ca").value * .25);
    document.getElementById("10ct").innerHTML = ("$" + document.getElementById("10ca").value * .10);    var tot = tot + (document.getElementById("10ca").value * .10);
    document.getElementById("5ct").innerHTML = ("$" + document.getElementById("5ca").value * .05);      var tot = tot + (document.getElementById("5ca").value * .05);
    document.getElementById("1ct").innerHTML = ("$" + document.getElementById("1ca").value * .01);      var tot = tot + (document.getElementById("1ca").value * .01);
    document.getElementById("25rt").innerHTML = ("$" + document.getElementById("25ra").value * 10);     var tot = tot + (document.getElementById("25ra").value * 10);
    document.getElementById("10rt").innerHTML = ("$" + document.getElementById("10ra").value * 5);      var tot = tot + (document.getElementById("10ra").value * 5);
    document.getElementById("5rt").innerHTML = ("$" + document.getElementById("5ra").value * 2);        var tot = tot + (document.getElementById("5ra").value * 2);
    document.getElementById("1rt").innerHTML = ("$" + document.getElementById("1ra").value * .5);       var tot = tot + (document.getElementById("1ra").value * .5);
    document.getElementById("totaled").innerHTML = (tot);
}