let Marks = 40;
let Grade;

switch (true) {
  case Marks >= 90 && Marks <= 100:
    Grade = 'S Grade';
    break;
  case Marks >= 80 && Marks <= 90:
    Grade = 'A Grade';
    break;
  case Marks >= 70 && Marks <= 80:
    Grade = 'B Grade';
    break;
  case Marks >= 60 && Marks <= 70:
    Grade = 'C Grade';
    break;
  case Marks >= 50 && Marks <= 60:
    Grade = 'D Grade';
    break;
  case Marks >= 40 && Marks <= 50:
    Grade = 'E Grade';
    break;
  case Marks >= 0 && Marks <= 40:
    Grade = 'Failed';
    break;
  default:
    Grade = 'Invalid Marks';
}

console.log(Grade); // Tuesday
