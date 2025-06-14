/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий, чи вихідний.
*/
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: DayOfWeek): boolean {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log(isWeekend(DayOfWeek.Monday));   // false
console.log(isWeekend(DayOfWeek.Tuesday));   // false
console.log(isWeekend(DayOfWeek.Wednesday));   // false
console.log(isWeekend(DayOfWeek.Thursday));   // false
console.log(isWeekend(DayOfWeek.Friday));   // false
console.log(isWeekend(DayOfWeek.Saturday));   // true
console.log(isWeekend(DayOfWeek.Sunday));   // true
