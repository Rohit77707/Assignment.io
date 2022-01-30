var url = "https://api2.binance.com/api/v3/ticker/24hr";
var div = document.getElementById("tab");
var table = document.getElementById("table");

fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i <= 100; i++) {
      var th1 = document.createElement("th");
      var th2 = document.createElement("th");
      var th3 = document.createElement("th");
      var th4 = document.createElement("th");
      var br=document.createElement("br")
      th1.innerText = "Symbol";
      th2.innerText = "Bid Qty";
      th3.innerText = "Count";
      th4.innerText = "Open Price";
      table.append(th1, th2, th3, th4);
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      td1.innerText = data[i].symbol;
      td2.innerText = data[i].bidQty;
      td3.innerText = data[i].count;
      td4.innerText = data[i].openPrice;
      tr.append(td1, td2, td3, td4);
      tr.appendChild(br);
      table.appendChild(tr);
    }
  });
