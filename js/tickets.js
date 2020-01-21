const tickets = queue => {
  let cash = 0;
  for (let amount of queue) {
    if (amount === 25) {
      cash += amount;
      continue;
    }
    let changeRequired = amount - 25;
    if (changeRequired > cash) {
      return false;
    }
    cash -= changeRequired;
  }
  return true;
}

module.exports = tickets;