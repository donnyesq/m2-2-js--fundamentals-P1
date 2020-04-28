// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
  let totalGrades = 0;
  grades.forEach(function (grade) {
    totalGrades += grade;
  });
  let average = Math.round(totalGrades / grades.length);

  if (average < 60) {
    average = "F";
    return average;
  } else if (average < 70) {
    average = "D";
    return average;
  } else if (average < 80) {
    average = "C";
    return average;
  } else if (average < 90) {
    average = "B";
    return average;
  } else if (average < 100) {
    average = "A";
    return average;
  }
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
