
// 1 Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function assignGrade(score: number): string {
    if (score >= 80 && score <= 100) {
      return 'A';
    } else if (score >= 70 && score <= 79) {
      return 'B';
    } else if (score >= 60 && score <= 69) {
      return 'C';
    } else if (score >= 50 && score <= 59) {
      return 'D';
    } else if (score >= 0 && score <= 49) {
      return 'F';
    } else {
      return 'Invalid score';
    }
  }
  
  // Solicita a pontuação do aluno através do console
  let userInput: string | null = prompt('Enter student score:');
  
  if (userInput !== null) {
    const score: number = parseInt(userInput);
    const grade: string = assignGrade(score);
    console.log(`Student grade is: ${grade}`);
  }
  

// 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// Solicita ao usuário que insira o mês
let userInputMonth: string | null = prompt('Enter a month:');

if (userInputMonth !== null) {
  const month: string = userInputMonth.toLowerCase();

  switch (month) {
    case 'september':
    case 'october':
    case 'november':
      console.log('The season is Autumn.');
      break;
    case 'december':
    case 'january':
    case 'february':
      console.log('The season is Winter.');
      break;
    case 'march':
    case 'april':
    case 'may':
      console.log('The season is Spring.');
      break;
    case 'june':
    case 'july':
    case 'august':
      console.log('The season is Summer.');
      break;
    default:
      console.log('Invalid month input.');
  }
}

// 3 Check if a day is weekend day or a working day. Your script will take day as an input.

// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

// Solicita ao usuário que insira o dia
let userInputDay: string | null = prompt('What is the day today?');

if (userInputDay !== null) {
  const day: string = userInputDay.toLowerCase();

  switch (day) {
    case 'saturday':
    case 'sunday':
      console.log(`${day} is a weekend.`);
      break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log(`${day} is a working day.`);
      break;
    default:
      console.log('Invalid day input.');
  }
}
