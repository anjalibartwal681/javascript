const complexObject = {
  school: 'ABC High School',
  classes: {
    math: {
      teacher: 'Mrs. Johnson',
      students: [
        { name: 'Piyush', grade: 10 },
        { name: 'Aman', grade: 11 }
      ]
    },
    science: {
      teacher: 'Mr. Smith',
      students: [
        { name: 'Emma', grade: 10 },
        { name: 'Ryan', grade: 11 }
      ]
    }
  },
  extracurriculars: {
    clubA: ['Alice', 'Bob'],
    clubB: ['Charlie', 'Diana']
  }
};
const{school,classes:{
math:{teacher:mathTeacher,students:[{name:mathStudentName,grade:mathStudentGrede}]},
science:{teacher:scienceTeacher,students:[{name:scienceStudentName,grade:scienceStudentGrade}]}},
extracurriculars:{clubA,clubB}}=complexObject;

console.log(scienceTeacher);

