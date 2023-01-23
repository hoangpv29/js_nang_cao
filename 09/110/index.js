const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printGoals = function (...player) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
  printGoals("Davies", "Muller" );
  printGoals(...game.scored)

  //7

  team1<team2 && console.log('team 1 is more likely to win');
  team1>team2 && console.log('team 2 is more likely to win');
/*
  // 1.
  for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);
  // 2.
  const odds = Object.values(game.odds);
  let average = 0;
  for (const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);
  // 3.
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
  }
  // Odd of victory Bayern Munich: 1.33
  // Odd of draw: 3.25
  // Odd of victory Borrussia Dortmund: 6.5
  // BONUS
  // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  */

/*
  ///////////////////////////////////////
  // Looping Objects: Object Keys, Values, and Entries
  // Property NAMES
  const properties = Object.keys(openingHours);
  console.log(properties);
  let openStr = `We are open on ${properties.length} days: `;
  for (const day of properties) {
    openStr += `${day}, `;
  }
  console.log(openStr);
  // Property VALUES
  const values = Object.values(openingHours);
  console.log(values);
  // Entire object
  const entries = Object.entries(openingHours);
  // console.log(entries);
  // [key, value]
  for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
  }
  ///////////////////////////////////////
  // Optional Chaining
  if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);
  // console.log(restaurant.openingHours.mon.open);
  // WITH optional chaining
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);
  // Example
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
  }
  // Methods
  console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
  console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
  // Arrays
  const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
  // const users = [];
  console.log(users[0]?.name ?? 'User array empty');
  if (users.length > 0) console.log(users[0].name);
  else console.log('user array empty');
  ///////////////////////////////////////
  // The for-of Loop
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  for (const item of menu) console.log(item);
  for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
  }
  // console.log([...menu.entries()]);
  */

///////////////////////////////////////
// Coding Challenge #1

/* 
  We're building a football betting app (soccer for my American friends 😅)!
  Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
  1. Create one player array for each team (variables 'players1' and 'players2')
  2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  3. Create an array 'allPlayers' containing all players of both teams (22 players)
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
  TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
  GOOD LUCK 😀
  */
