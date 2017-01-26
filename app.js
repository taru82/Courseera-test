var student{
  name: ""
  type: "student"
};

document.addEventListener(DOMContentLoaded, contentLoaded);

function contentLoaded() {
  document.getElementById('name').addEventListener("keyup", keyup)

}

function calculateNumberOutput() {
student.name=  document.getElementById('name')
var totalNumber=0
for (var i = 0; i < student.name.length; i++) {
      totalNumber+ = student.name.charcodeAt(i);
}

var output = "Total Numeric value of person's name enter" + totalNumber;
document.getElementById(output).innerText = output;

}
