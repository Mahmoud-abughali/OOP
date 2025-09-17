function Student(Name, Age, Grade) {
  this.name = Name;
  this.age = Age;
  let grade;
  function validateGrade(value) {
    if (value === "A" || value === "F") {
      grade = value;
    } else {
      console.error("Invalid grade! Grade must be 'A' or 'F'.");
      grade = "F";
    }
  }

  validateGrade(Grade);
  this.setGrade = function (newGrade) {
    validateGrade(newGrade);
  };
  this.getGrade = function () {
    return grade;
  };
}
Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${this.age
    }, and I’m in grade ${this.getGrade()}`
  );
};
const student = new Student("Mahmoud", 23, "A");
student.introduce();
console.log(student.getGrade());
student.setGrade("F");
student.introduce();
student.setGrade("B");