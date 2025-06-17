/*
Список студентов с проверкой на успеваемость
Отобрази список студентов. У каждого студента есть имя и средний балл. Если балл больше 4.5 — показать «Отличник», иначе «Нуждается в улучшении».
const students = [
  { name: "Аня", average: 4.8 },
  { name: "Борис", average: 3.9 },
  { name: "Света", average: 4.6 },
  { name: "Игорь", average: 4.1 },
];
Ниже списка студентов покажите среднюю оценку
*/
import React from "react";

const StudentList = ({ student, average }) => {
    const getStudents = (average) => {
        if (average > 4.5) {
            return "Отличник";
        } else {
            return "Нуждается в улучшении";
        } 
         
    };
    const studentStatus = getStudents(average);

const averageGroup = (students) => {
  const group = students.reduce((sum, student) => sum + student.average, 0);
    return (group / students.length).toFixed(2); 
};

  return (
    <>
    <h2>Студент: {student}</h2>
    <p>Средний балл: {average}</p>
    <p>Статус: {studentStatus}</p>
    <h3>Средняя оценка группы: {averageGroup([{ average }])}</h3>
    </>
  );
};


export default StudentList;
