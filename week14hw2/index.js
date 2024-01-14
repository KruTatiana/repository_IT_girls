const div = document.querySelector('div');

const students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const grades = students.map(()=>{return Math.round(Math.random()*100)});
console.log(grades);

const sum = grades.reduce((a,b) => {
  return a+b;
});
let mediumGrade = Math.floor(sum/grades.length);
console.log(mediumGrade);

let maxGrade = Math.max(...grades);
console.log(maxGrade);

let minGrade = Math.min(...grades);
console.log(minGrade);

const positiveGrades = grades.filter(el => el>=60);
console.log(positiveGrades.length);

const negativeGrades = grades.filter(el => el<60);
console.log(negativeGrades.length);

const lettersGrades = grades.map( item => {
  if (item>=80) {
    return "A";
  } else if (item>=60 && item<=79) {
    return "B";
  }else if (item>=40 && item<=59) {
    return "C";
  }else if (item>=20 && item<=39) {
    return "D";
  }else if (item<20) {
    return "E";
  }
});

console.log(lettersGrades);



const stringArray = [
  `Средний балл студентов ${mediumGrade}`,
  `Максимальный балл среди студентов ${maxGrade}`,
  `Минимальный балл среди студентов ${minGrade}`,
  `Положительную оценку получили ${positiveGrades.length} чел.`,
  `Отрицательную оценку получили ${negativeGrades.length} чел.`,
  `Оценки в буквенном формате ${lettersGrades.join(',')}`,
]

const gradesList = document.querySelector('ul');


stringArray.forEach(item => {
  const gradesListItem = document.createElement('li');
  gradesListItem.textContent = `${item};`;
  gradesList.append(gradesListItem);
});

