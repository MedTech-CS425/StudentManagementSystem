var header = document.getElementById('welcome');
header.textContent = 'Welcome';

var students = [];

var addStudent = function (student) {
    students.push(student)
}
addStudent('med');
addStudent('mehrez');
addStudent('yahya');
function display() {
    var ul = document.getElementById('students');
    ul.innerHTML= "";
    for (let index = 0; index < students.length; index++) {
        var li = document.createElement('li');
        li.textContent = students[index];
        ul.appendChild(li)
    }
}


var button = document.getElementById('add');
var inputName = document.getElementById('name');
button.addEventListener('click', function () {
    addStudent(inputName.value)
    display()
});
document.onload(display)