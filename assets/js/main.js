var money = document.getElementById("money");
var points = document.getElementById("points");
var button = document.getElementById("pay");
var div_pay = document.getElementById("div_pay");
var ppp = document.getElementById("ppp");

function moneytopoints() { 
    var val_money = money.value;
    if (val_money <= 250) {
        if (val_money >= 0) {
            var val_money = money.value;
            var result_points = Math.round(((Math.pow(1.009637726, val_money) - 1) * (Math.pow(10, 5))));
            points.value = result_points;
            setInterval(100);
        }
        else {
            var val_money = money.value;

            money.value = 0;
            setInterval(100);
        }
    }
    else if (val_money > 250) {
        var val_money = money.value;

        money.value = 250;
        setInterval(100);
    }
}

button.onclick = function() {
    div_pay.style.display = "block";
    ppp.innerHTML = "Waiting to receive " + money.value + "€ in Bitcoin or Ethereum at these adresses:";
}
window.onclick = function(event) {
    if (event.target == div_pay) {
      div_pay.style.display = "none";
    }
  }