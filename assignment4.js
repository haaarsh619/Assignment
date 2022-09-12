const matchHouses = (n) => {
    if (n === 0) {
      return "Step 0 returns 0 matchsticks."
    } else if (n < 0 || typeof n !== "number") {
      return "not valid number"
    } else {
      let a;
      a = (5 * n) + 1;
      return a;
    }
    
  };
  console.log(matchHouses(2));