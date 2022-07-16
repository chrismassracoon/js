const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
 const students = arr.sort();
 const stud1 = students.slice(0, 3);
 const stud2 = students.slice(3, 6);
 const stud3 = students.slice(6, 9);
 const others = students.length == 9 ? '-' : students.slice(9, students.length).join(', ');
 const res = [stud1, stud2, stud3, `Оставшиеся студенты: ${others}`];
 return res;
}

sortStudentsByGroups(students);