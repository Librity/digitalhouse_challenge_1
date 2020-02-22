import StudentController from './controllers/StudentController';
import generateStudentView from './views/StudentView';

const divisor = '-'.repeat(40);
const greeting = `${divisor}\nSistema escolar inicializado.\n${divisor}`;

console.log(greeting);
console.log(StudentController.listStudents());
console.log(divisor);

console.log(StudentController.addStudent(''));
console.log(StudentController.addStudent('    '));
console.log(StudentController.addStudent('John Doe'));
console.log(divisor);

const student1 = StudentController.findStudent('');
console.log(student1);
let student2 = StudentController.findStudent('John');
console.log(generateStudentView(student2));
console.log(divisor);

student2 = StudentController.enrollStudent(student2, 'Typescript 101');
console.log(generateStudentView(student2));
console.log(divisor);

student2 = StudentController.addAbsence(student2);
console.log(generateStudentView(student2));
console.log(divisor);

const student3 = StudentController.addGrade(student2, -1.8);
console.log(student3);
const student4 = StudentController.addGrade(student2, 10.8);
console.log(student4);
student2 = StudentController.addGrade(student2, 1.8);
console.log(generateStudentView(student2));
console.log(divisor);

console.log(StudentController.flunkOrPass(student2));
student2 = StudentController.addGrade(student2, 10);
student2 = StudentController.addGrade(student2, 8);
student2 = StudentController.addGrade(student2, 9);
console.log(StudentController.flunkOrPass(student2));
student2 = StudentController.addAbsence(student2);
student2 = StudentController.addAbsence(student2);
student2 = StudentController.addAbsence(student2);
console.log(StudentController.flunkOrPass(student2));
console.log(divisor);
