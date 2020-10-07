//Select all elements0 of interest
const nameEle = document.querySelector("#name");
const emailEle = document.querySelector("#email");
const genderEle = document.querySelector("#gender");
const courseEle = document.querySelector("#course");
const addBtn = document.querySelector("#addBtn");
const studentList = document.querySelector("#studentList");
const count = document.querySelector("#count");

addBtn.addEventListener("click", addStudent);

function addStudent(e) {
  console.log(e);
  let allStudents = {
    name: nameEle.value,
    email: emailEle.value,
    gender: genderEle.value,
    course: courseEle.value,
  };

  addStudentToTable(allStudents);
  aboutStudent(allStudents);
  clearFields();
}

function addStudentToTable(stud) {
  let row = document.createElement("tr");
  row.innerHTML = `
  <td>${stud.name}</td>
  <td>${stud.email}</td>
  <td>${stud.gender}</td>
  <td>${stud.course}</td>
  <td><a href="#" class= "btn btn-danger btn-sm">Delete</a></td>
  `;
  studentList.appendChild(row);
}

function aboutStudent(student) {
  let students = [];
  if (localStorage.getItem("students") == null) {
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("New Student Added");
  } else {
    students = JSON.parse(localStorage.getItem("students"));
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("New student added");
  }
}

function fetchstudents() {
  let students;
  if (localStorage.getItem("students") == null) {
    students = [];
  } else {
    students = JSON.parse(localStorage.getItem("students"));
    count.innerHTML = `${students.length} students registered`;
  }
  return students;
}

function clearFields() {
  nameEle.value = "";
  emailEle.value = "";
  genderEle.value = "";
  courseEle.value = "";
}

function displaystudent() {
  const students = fetchstudents();
  for (const student of students) {
    addStudentToTable(student);
  }
}
