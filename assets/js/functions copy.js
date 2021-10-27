data =
  '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';

let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

// Mention the path of the json file in the script source along with the javascript file.

// var mydata = JSON.parse(data);
// alert(mydata[0].name);
// alert(mydata[0].age);
// alert(mydata[1].name);
// alert(mydata[1].age);

const obj = JSON.parse(text);
document.getElementById("demo1").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;

var element = document.getElementById("demo1");
element.classList.add("tes");
element.setAttribute("style", "color:pink;");
console.log("hehe");

function UserAction() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "https://ghibliapi.herokuapp.com/films", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send("Your JSON Data Here");
}
