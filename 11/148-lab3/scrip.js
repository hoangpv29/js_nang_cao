


const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
  
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };
  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
  
  
  ///////////////////////////////////////
  // The map Method
  const eurToUsd = 1.1;
  
  // const movementsUSD = movements.map(function (mov) {
  //   return mov * eurToUsd;
  // });
  
  const movementsUSD = movements.map(mov => mov * eurToUsd);
  
  console.log(movements);
  console.log(movementsUSD);
  
  const movementsUSDfor = [];
  for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
  
  const movementsDescriptions = movements.map(
    (mov, i) =>
      `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
        mov
      )}`
  );
  console.log(movementsDescriptions);
  
  
  ///////////////////////////////////////
  // The filter Method
  const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
  });
  console.log(movements);
  console.log(deposits);
  
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
  
  const withdrawals = movements.filter(mov => mov < 0);
  console.log(withdrawals);
  
  
  ///////////////////////////////////////
  // The reduce Method
  console.log(movements);
  
  // accumulator -> SNOWBALL
  // const balance = movements.reduce(function (acc, cur, i, arr) {
  //   console.log(`Iteration ${i}: ${acc}`);
  //   return acc + cur;
  // }, 0);
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  console.log(balance);
  
  let balance2 = 0;
  for (const mov of movements) balance2 += mov;
  console.log(balance2);
  
  // Maximum value
  const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  console.log(max);