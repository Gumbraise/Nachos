var money = document.getElementById("money");
var points = document.getElementById("points");
//var button = document.getElementById("submit");

var mtp = document.getElementById("mtp");
var ptm = document.getElementById("ptm");

/*button.onclick = */function moneytopoints() { 
    if (val_money <= 250) {
        var val_money = money.value;
        var result_points = Math.round(((Math.pow(1.009637726, val_money) - 1) * (Math.pow(10, 5))));
        points.value = result_points;
        setInterval(100);
    }
    else if (val_money > 0) {
        money.value = 0;
        setInterval(100);
    }
    else if (val_money > 250) {
        money.value = 250;
        setInterval(100);
    }
}

/*
function pointstomoney() {
    
        var val_points = points.value;
            
        var result_money = Math.round(((Math.pow(val_points, 1/1.09637726) - 1) * (Math.pow(10, -4))));

        money.value = result_money;
}
*/