var url = "http://universities.hipolabs.com/search?name=middle";
fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i <= data.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      td1.innerText = data[i].name;
      td2.innerText = data[i].country;
      tr.append(td1, td2);
      tr.appendChild(br);
      table.appendChild(tr);
    }
  });
var th1 = document.createElement("th");
var th2 = document.createElement("th");

var br = document.createElement("br");
th1.innerText = "University Name";
th2.innerText = "Country Name";
table.append(th1, th2);
var form = document.querySelector(".search-country");
var inputElement = document.getElementById("#search");
form.addEventListener("submit", find);

function find(e) {
  var x = inputElement.value;
  for(var i=0;i<data.length;i++)
  {
    if(x==data[i].name)
    {
        console.log("country found");
    }
  }
 
}
