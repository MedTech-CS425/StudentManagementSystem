//2
var numberOfStudents = 0;
//3 this function is commented because we made changes to it in question 6
/*function addStudent() { 
    numberOfStudents++
  }  */
//4
function getNumberOfStudents() {
    return numberOfStudents;
 }  
//5
var students = []
//6
// Modify the function addStudent so that it takes a string (name) as 
// a parameter and adds that string to the array students.
// this function is commented because we made some changes to it in question 9

/*function addStudent(name) { 
    students.push(name)
  }*/

//7
addStudent('houssem');
addStudent('aziz'); // I think 2 is enough
//8
function clearStudents() {
    //students = [] 
    // another approach to this is students.length = 0 
    //numberOfStudents = 0
    students.length, numberOfStudents = 0;
 } 
//9
/*function addStudent(name) {
    students.push(name)
    numberOfStudents = students.length
}*/
//10
function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
 }  
//11
addStudent(createFullName('Mike', 'Jordan'));
//12
/*
Write a function called getStudentByInitials that takes a string (name) and a character as a 
parameter and returns true if the string (studentName) starts with the character and false otherwise.
Make sure your function works for upper case and lower case letters
*/
function getStudentByInitials(name, initial) {
    return name[0].toLowerCase() === initial.toLowerCase();
 }

//13
function isFullName(name) {
    return name.split(' ').length > 1;
 }
//14
//Write a function called getStudentsByInitials (notice the S in studentS) 
//that takes a character as a parameter and loops through the array students 
//and then returns an array of all the students whose firstName starts with 
//that character. NOTE: Use While Loop

/*function getStudentsByInitials(initial) {
    var i = 0
    var result = []
    while(i < students.length) {
        if(students[i][0].toLowerCase() === initial.toLowerCase()){
            result.push(students[i])
        }
        i++
    }
    return result
 }*/

//15
//Modify the function getStudentsByInitials so that it takes
//two characters as parameters and returns an array with students
//that have a fullName with their first name starting with the first
//initial and their last name starting with the second initial.
//HINT: Use the function isFullName
/*
function getStudentsByInitials(firstInitial, secondInitial) {
    var i = 0
    var result = []
    while(i < students.length) {
        if(isFullName(students[i])){
            var splitted = students[i].split(' ')
            if(splitted[0][0].toLowerCase() === firstInitial.toLowerCase()
                && splitted[1][0].toLowerCase() === secondInitial.toLowerCase()){
                        result.push(students[i])
                    }
        }   
        i++
    }
    return result
 }
*/
//17+18
/*var student = {
    firstName: 'Beyonce', 
    lastName: 'Knowles', 
    fullName: 'Beyonce Knowles', 
    email: 'QueenB@gmail.com', 
    age: 25,
    education: 'art'
}*/
//19
function createStudent(firstName, lastName, email, age, education) {
    var student = {
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        age: age,
        education: education
    };
    return student;
 }
/*
equivalent to this
function createStudent(firstName, lastName, email, age, education) {
    return {
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        age: age,
        education: education
    }
 }
*/
//22
var me = createStudent('Beyonce','Knowles','QueenB@gmail.com', 25,'art')
//23
//Create a function called addSkills that takes a student object and an 
//array of skills and adds a property called skills with the array as a value to the object.

/*
function addSkills(student, skills){
    student.skills = skills
}*/
//24
//Modify the function addSkills so that it only adds the 
//new skills from the array; the skills property will not 
//repeat values when adding skills to the object.
function addSkills(student, skills){
    if(student.skills){
        for(var i=0; i<skills.length; i++){
            console.log(skills)
            if(student.skills.includes(skills[i])){
                skills.splice(i,1);
            }
        }
    }
    else {
        student.skills = []
    }
    student.skills = student.skills.concat(skills)
    return student;
}
//25
clearStudents();
//26 delete object me
//27
function addStudent(student) {
    // this function takes an object student and pushes it to the students array
    students.push(student);
    numberOfStudents = students.length;
}
//28 invoke addStudent with makeStudent
addStudent(makeStudent('Beyonce','Knowles','QueenB@gmail.com', 25,'art'));
//29 invoke addSkills
//30

/*function removeStudent(firstName) {
    for(var i=0; i<students.length; i++){
        if(students[i].firstName == firstName){
            students.splice(i,1)
            // The break statement "jumps out" of a loop because
            // once we find our student we don't need to continue looping
            break;
        }
    }
    return "There's no student with that name"
 } */

//31
function removeStudent(firstName) {
    for(var i=0; i<students.length; i++){
        if(students[i].firstName == firstName){
            students.splice(i,1);
            numberOfStudents = students.length;
            // The break statement "jumps out" of a loop because
            // once we find our student we don't need to continue looping
            break;
        }
    }
    return "There's no student with that name";
 }
//32
function isStudentOlderThan(student, age) {
    return student.age > age;
    // this code is equivalent to:
    /* if (student.age > age){
            return ture
    }
    return false
    */
 } 
//33
function doesStudentHaveSkills(student) {
    return student.skills !== undefined;
 } 
//34
function isStudentQualified(student) {
    return isStudentQualified(student) && doesStudentHaveSkills(student);
 } 
//35
function numberOfStudentsOlderThan(age) {
    var count = 0;
    for(var i = 0; i<students.length; i++){
        if(isStudentOlderThan(students[i], age)){
            count++;
        }
    }
    return count;
 }
//36
function getStudentsWithSkills() {
    var result = [];
    for(var i = 0; i<students.length; i++){
        if(doesStudentHaveSkills(students[i])){
            result.push(students[i])
        }
    }
    return result;
 }
//37
function getAllStudentsWithSkill(skill) {
    var result = [];
    for(var i = 0; i<students.length; i++){
        if(doesStudentHaveSkills(students[i])){
            if(students[i].skills.includes(skill)){
                result.push(students[i]);
            } 
        }
    }
    return result;
 } 