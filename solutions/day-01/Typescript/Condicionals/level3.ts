
// 1 Write a program which tells the number of days in a month.

// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

// Solicitar ao usuário que insira o mês
let userInput: string | null = prompt('Enter a month:');

if (userInput !== null) {
  const month: string = userInput.toLowerCase();

  switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      console.log(`${month} has 31 days.`);
      break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      console.log(`${month} has 30 days.`);
      break;
    case 'february':
      console.log(`${month} has 28 days.`);
      break;
    default:
      console.log('Invalid month input.');
  }
}

// 1 Write a program which tells the number of days in a month, now consider leap year.

// Solicitar ao usuário que insira o mês e o ano
let userInputMonth: string | null = prompt('Enter a month:');
let userInputYear: string | null = prompt('Enter a year:');

if (userInputMonth !== null && userInputYear !== null) {
  const month: string = userInputMonth.toLowerCase();
  const year: number = parseInt(userInputYear);

  let daysInMonth: number;

  switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      daysInMonth = 31;
      break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      daysInMonth = 30;
      break;
    case 'february':
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
      break;
    default:
      console.log('Invalid month input.');
      daysInMonth = -1;
  }

  if (daysInMonth !== -1) {
    console.log(`${month} in year ${year} has ${daysInMonth} days.`);
  }
}
