// Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

// grades 90 and above should return "A"

// grades 80 to 89 should return "B"

// grades 70 to 79 should return "C"

// grades 60 to 69 should return "D"

// 59 and below should return "F"

function gradeCalculator(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80 && num <= 89) {
    return "B";
  } else if (num >= 70 && num <= 79) {
    return "C";
  } else if (num >= 60 && num <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
